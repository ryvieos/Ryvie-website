const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Dossier pour stocker les analytics
const ANALYTICS_DIR = path.join(__dirname, 'data');
const ANALYTICS_FILE = path.join(ANALYTICS_DIR, 'analytics.json');

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

// Route de santé
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Démarrer le serveur
async function start() {
  await ensureDataDir();
  
  app.listen(PORT, () => {
    console.log(`🚀 Ryvie Analytics Server running on port ${PORT}`);
    console.log(`📊 Analytics endpoint: http://localhost:${PORT}/api/analytics`);
    console.log(`📈 Stats dashboard: http://localhost:${PORT}/api/analytics/stats`);
  });
}

start();
