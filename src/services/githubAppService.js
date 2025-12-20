// Service pour récupérer les apps depuis le backend Ryvie
// Le backend gère la récupération depuis GitHub et le cache

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

/**
 * Récupère la liste des apps depuis le backend
 * Le backend gère automatiquement le cache et la récupération depuis GitHub
 * @returns {Promise<Array>} Liste des applications
 */
export async function fetchAppsFromGitHub() {
  try {
    console.log('🔄 Récupération des apps depuis le backend...');
    
    const response = await fetch(`${BACKEND_URL}/api/apps`);

    if (!response.ok) {
      throw new Error(`Backend API error: ${response.status}`);
    }

    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Erreur inconnue');
    }

    const cacheStatus = result.cached ? '(cache)' : '(GitHub)';
    console.log(`✅ ${result.count} apps récupérées ${cacheStatus}`);
    
    if (result.releaseTag) {
      console.log(`📦 Version: ${result.releaseTag}`);
    }

    return result.data;

  } catch (error) {
    console.error('❌ Erreur récupération apps:', error);
    return [];
  }
}

/**
 * Force le refresh des apps depuis GitHub
 * @returns {Promise<Object>} Résultat du refresh
 */
export async function refreshApps() {
  try {
    console.log('🔄 Refresh forcé des apps...');
    
    const response = await fetch(`${BACKEND_URL}/api/apps/refresh`, {
      method: 'POST'
    });

    if (!response.ok) {
      throw new Error(`Backend API error: ${response.status}`);
    }

    const result = await response.json();
    console.log(`✅ ${result.count} apps refreshées`);
    
    return result;

  } catch (error) {
    console.error('❌ Erreur refresh apps:', error);
    throw error;
  }
}
