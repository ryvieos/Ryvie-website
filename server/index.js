const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Dossier pour stocker les analytics et apps
const ANALYTICS_DIR = path.join(__dirname, 'data');
const ANALYTICS_FILE = path.join(ANALYTICS_DIR, 'analytics.json');
const APPS_FILE = path.join(ANALYTICS_DIR, 'apps.json');
const APPS_METADATA_FILE = path.join(ANALYTICS_DIR, 'apps-metadata.json');

// Configuration GitHub
const GITHUB_API_URL = 'https://api.github.com/repos/ryvieos/Ryvie-Apps/releases/latest';
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

function parseVersionFromFilename(filename) {
  const match = filename.match(/(\d+)(?:\.(\d+))?(?:\.(\d+))?/);
  if (!match) return null;
  return {
    major: Number(match[1] || 0),
    minor: Number(match[2] || 0),
    patch: Number(match[3] || 0)
  };
}

function compareVersionsDesc(a, b) {
  if (!a && !b) return 0;
  if (!a) return 1;
  if (!b) return -1;
  if (a.major !== b.major) return b.major - a.major;
  if (a.minor !== b.minor) return b.minor - a.minor;
  return b.patch - a.patch;
}

function detectOs(req) {
  const queryOs = String(req.query.os || '').toLowerCase();
  if (queryOs) return queryOs;
  const ua = String(req.headers['user-agent'] || '').toLowerCase();
  if (ua.includes('mac')) return 'mac';
  if (ua.includes('linux')) return 'linux';
  return 'windows';
}

async function getLatestInstallerFile(os) {
  const logicielsDir = path.join(__dirname, '..', 'public', 'logiciel');
  const entries = await fs.readdir(logicielsDir);

  let extRegex;
  if (os === 'mac' || os === 'macos') extRegex = /\.dmg$/i;
  else if (os === 'linux') extRegex = /\.appimage$/i;
  else extRegex = /\.exe$/i;

  const candidates = [];
  for (const filename of entries) {
    if (!extRegex.test(filename)) continue;
    const fullPath = path.join(logicielsDir, filename);
    const stat = await fs.stat(fullPath);
    candidates.push({
      filename,
      fullPath,
      mtimeMs: stat.mtimeMs,
      version: parseVersionFromFilename(filename)
    });
  }

  if (candidates.length === 0) return null;

  candidates.sort((a, b) => {
    const v = compareVersionsDesc(a.version, b.version);
    if (v !== 0) return v;
    return b.mtimeMs - a.mtimeMs;
  });

  return candidates[0];
}

// Créer le dossier data s'il n'existe pas
async function ensureDataDir() {
  try {
    await fs.mkdir(ANALYTICS_DIR, { recursive: true });
    // Créer le fichier s'il n'existe pas
    try {
      await fs.access(ANALYTICS_FILE);
    } catch {
      await fs.writeFile(ANALYTICS_FILE, JSON.stringify([], null, 2));
    }
  } catch (error) {
    console.error('Error creating data directory:', error);
  }
}

// Lire les analytics
async function readAnalytics() {
  try {
    const data = await fs.readFile(ANALYTICS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading analytics:', error);
    return [];
  }
}

// Écrire les analytics
async function writeAnalytics(data) {
  try {
    await fs.writeFile(ANALYTICS_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing analytics:', error);
  }
}

// Route pour recevoir les événements analytics
app.post('/api/analytics', async (req, res) => {
  try {
    const event = req.body;
    
    // Ajouter des métadonnées serveur
    event.serverTimestamp = new Date().toISOString();
    event.ip = req.ip || req.connection.remoteAddress;
    
    // Lire les données existantes
    const analytics = await readAnalytics();
    
    // Ajouter le nouvel événement
    analytics.push(event);
    
    // Sauvegarder
    await writeAnalytics(analytics);
    
    console.log('📊 New analytics event:', event.name);
    
    res.json({ success: true, message: 'Event tracked' });
  } catch (error) {
    console.error('Error tracking event:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/download/desktop', async (req, res) => {
  try {
    const os = detectOs(req);
    const file = await getLatestInstallerFile(os);
    if (!file) {
      return res.status(404).json({
        success: false,
        error: `Aucun installateur disponible pour ${os}`
      });
    }
    return res.download(file.fullPath, file.filename);
  } catch (error) {
    console.error('Error serving latest installer:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

// Route pour récupérer les statistiques
app.get('/api/analytics/stats', async (req, res) => {
  try {
    const analytics = await readAnalytics();
    
    // Calculer les stats
    const stats = {
      total: analytics.length,
      downloads: analytics.filter(e => e.name === 'download_desktop').length,
      demoClicks: analytics.filter(e => e.name === 'click_demo').length,
      preorders: analytics.filter(e => e.name === 'click_preorder').length,
      githubClicks: analytics.filter(e => e.name === 'click_github').length,
      contactClicks: analytics.filter(e => e.name === 'click_contact').length,
      byEvent: {},
      byOS: {},
      byDate: {},
      recentEvents: analytics.slice(-10).reverse()
    };
    
    // Compter par type d'événement
    analytics.forEach(event => {
      stats.byEvent[event.name] = (stats.byEvent[event.name] || 0) + 1;
      
      // Compter par OS pour les téléchargements
      if (event.name === 'download_desktop' && event.os) {
        stats.byOS[event.os] = (stats.byOS[event.os] || 0) + 1;
      }
      
      // Compter par date
      const date = event.timestamp ? event.timestamp.split('T')[0] : 'unknown';
      stats.byDate[date] = (stats.byDate[date] || 0) + 1;
    });
    
    res.json(stats);
  } catch (error) {
    console.error('Error getting stats:', error);
    res.status(500).json({ error: error.message });
  }
});

// Route pour exporter toutes les données
app.get('/api/analytics/export', async (req, res) => {
  try {
    const analytics = await readAnalytics();
    res.json(analytics);
  } catch (error) {
    console.error('Error exporting analytics:', error);
    res.status(500).json({ error: error.message });
  }
});

// Route pour réinitialiser les analytics (avec protection)
app.delete('/api/analytics/reset', async (req, res) => {
  try {
    const { password } = req.body;
    
    // Protection simple (à améliorer en production)
    if (password !== 'ryvie2024') {
      return res.status(403).json({ error: 'Unauthorized' });
    }
    
    await writeAnalytics([]);
    res.json({ success: true, message: 'Analytics reset' });
  } catch (error) {
    console.error('Error resetting analytics:', error);
    res.status(500).json({ error: error.message });
  }
});

// ========== SERVICE APPS GITHUB ==========

// Récupérer les apps depuis GitHub et les mettre en cache
async function fetchAppsFromGitHub() {
  try {
    console.log('🔄 Récupération des apps depuis GitHub...');
    
    // 1. Récupérer la dernière release
    const https = require('https');
    const releaseResponse = await fetch(GITHUB_API_URL, {
      headers: {
        'User-Agent': 'Ryvie-Website',
        'Accept': 'application/vnd.github.v3+json'
      },
      agent: new https.Agent({ rejectUnauthorized: true })
    });

    if (!releaseResponse.ok) {
      throw new Error(`GitHub API error: ${releaseResponse.status}`);
    }

    const release = await releaseResponse.json();
    console.log(`✅ Release trouvée: ${release.tag_name}`);

    // 2. Trouver l'asset apps.json
    const appsAsset = release.assets.find(asset => asset.name === 'apps.json');
    
    if (!appsAsset) {
      throw new Error('apps.json non trouvé dans les assets de la release');
    }

    // 3. Télécharger apps.json via l'API GitHub
    const appsResponse = await fetch(appsAsset.url, {
      headers: {
        'Accept': 'application/octet-stream',
        'User-Agent': 'Ryvie-Website'
      },
      agent: new https.Agent({ rejectUnauthorized: true })
    });

    if (!appsResponse.ok) {
      throw new Error(`Erreur téléchargement apps.json: ${appsResponse.status}`);
    }

    const apps = await appsResponse.json();
    console.log(`✅ ${apps.length} apps récupérées`);

    // 4. Enrichir avec les icônes
    const enrichedApps = apps.map(app => {
      let icon = null;

      // Extraire l'icône depuis gallery
      if (Array.isArray(app.gallery) && app.gallery.length > 0) {
        icon = app.gallery.find(url => url.toLowerCase().includes('icon'));
      }

      // Fallback vers le repo GitHub
      if (!icon) {
        icon = `https://raw.githubusercontent.com/ryvieos/Ryvie-Apps/main/${app.id}/icon.png`;
      }

      // Extraire les previews
      const previews = Array.isArray(app.gallery) 
        ? app.gallery.filter(url => !url.toLowerCase().includes('icon'))
        : [];

      return {
        ...app,
        icon,
        previews
      };
    });

    // 5. Sauvegarder en cache
    await fs.writeFile(APPS_FILE, JSON.stringify(enrichedApps, null, 2));
    await fs.writeFile(APPS_METADATA_FILE, JSON.stringify({
      releaseTag: release.tag_name,
      lastFetch: Date.now(),
      count: enrichedApps.length
    }, null, 2));

    console.log('💾 Apps sauvegardées en cache');
    return enrichedApps;

  } catch (error) {
    console.error('❌ Erreur récupération apps:', error);
    
    // Retourner le cache si disponible
    try {
      const cachedApps = await fs.readFile(APPS_FILE, 'utf8');
      console.log('⚠️ Utilisation du cache suite à l\'erreur');
      return JSON.parse(cachedApps);
    } catch {
      return [];
    }
  }
}

// Lire les apps depuis le cache
async function readAppsCache() {
  try {
    const apps = await fs.readFile(APPS_FILE, 'utf8');
    const metadata = await fs.readFile(APPS_METADATA_FILE, 'utf8');
    return {
      apps: JSON.parse(apps),
      metadata: JSON.parse(metadata)
    };
  } catch (error) {
    return { apps: [], metadata: null };
  }
}

// Vérifier si le cache est valide
function isCacheValid(metadata) {
  if (!metadata || !metadata.lastFetch) return false;
  return (Date.now() - metadata.lastFetch) < CACHE_DURATION;
}

// Route pour récupérer les apps
app.get('/api/apps', async (req, res) => {
  try {
    const { apps, metadata } = await readAppsCache();
    
    // Si le cache est valide, le retourner
    if (isCacheValid(metadata)) {
      console.log('📦 Apps servies depuis le cache');
      return res.json({
        success: true,
        count: apps.length,
        data: apps,
        cached: true,
        releaseTag: metadata.releaseTag
      });
    }
    
    // Sinon, récupérer depuis GitHub
    const freshApps = await fetchAppsFromGitHub();
    res.json({
      success: true,
      count: freshApps.length,
      data: freshApps,
      cached: false
    });
  } catch (error) {
    console.error('Error getting apps:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      data: []
    });
  }
});

// Route pour forcer le refresh des apps
app.post('/api/apps/refresh', async (req, res) => {
  try {
    const apps = await fetchAppsFromGitHub();
    res.json({
      success: true,
      count: apps.length,
      message: 'Apps refreshed from GitHub'
    });
  } catch (error) {
    console.error('Error refreshing apps:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Route de santé
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Démarrer le serveur
async function start() {
  await ensureDataDir();
  
  // Récupérer les apps au démarrage
  console.log('🔄 Initialisation du cache apps...');
  await fetchAppsFromGitHub();
  
  app.listen(PORT, () => {
    console.log(`🚀 Ryvie Analytics Server running on port ${PORT}`);
    console.log(`📊 Analytics endpoint: http://localhost:${PORT}/api/analytics`);
    console.log(`📈 Stats dashboard: http://localhost:${PORT}/api/analytics/stats`);
    console.log(`📱 Apps endpoint: http://localhost:${PORT}/api/apps`);
  });
}

start();
