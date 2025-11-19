/**
 * Module d'analytics pour tracker les événements importants du site Ryvie
 */

// Configuration
const ANALYTICS_ENDPOINT = 'http://localhost:3001/api/analytics'; // Backend analytics
const ENABLE_CONSOLE_LOG = true; // Pour debug, mettre false en production

/**
 * Envoie un événement d'analytics
 * @param {string} eventName - Nom de l'événement
 * @param {object} eventData - Données supplémentaires de l'événement
 */
export const trackEvent = async (eventName, eventData = {}) => {
  const event = {
    name: eventName,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    userAgent: navigator.userAgent,
    ...eventData
  };

  // Log en console pour debug
  if (ENABLE_CONSOLE_LOG) {
    console.log('📊 Analytics Event:', event);
  }

  // Envoyer au backend
  try {
    await fetch(ANALYTICS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    });

    // Aussi stocker localement pour backup/debug
    const events = JSON.parse(localStorage.getItem('ryvie_analytics') || '[]');
    events.push(event);
    localStorage.setItem('ryvie_analytics', JSON.stringify(events));
  } catch (error) {
    console.error('Analytics error:', error);
    // En cas d'erreur, au moins on garde en local
  }
};

/**
 * Événements prédéfinis pour faciliter le tracking
 */
export const analytics = {
  // Téléchargements
  downloadDesktop: (os) => trackEvent('download_desktop', { os }),
  
  // Démo
  clickDemo: () => trackEvent('click_demo'),
  
  // Navigation
  visitPage: (pageName) => trackEvent('visit_page', { page: pageName }),
  
  // Offres
  clickPreorder: (planName) => trackEvent('click_preorder', { plan: planName }),
  viewPricing: () => trackEvent('view_pricing'),
  
  // Open Source
  clickGithub: () => trackEvent('click_github'),
  
  // Contact
  clickContact: (source) => trackEvent('click_contact', { source }),
  
  // Applications
  viewApp: (appName) => trackEvent('view_app', { app: appName }),
  
  // Vidéos
  playVideo: (videoName) => trackEvent('play_video', { video: videoName }),
  
  // FAQ
  openFaqItem: (question) => trackEvent('open_faq', { question }),
};

/**
 * Fonction pour récupérer les stats locales (pour debug)
 */
export const getLocalStats = () => {
  const events = JSON.parse(localStorage.getItem('ryvie_analytics') || '[]');
  
  const stats = {
    total: events.length,
    downloads: events.filter(e => e.name === 'download_desktop').length,
    demoClicks: events.filter(e => e.name === 'click_demo').length,
    preorders: events.filter(e => e.name === 'click_preorder').length,
    githubClicks: events.filter(e => e.name === 'click_github').length,
    contactClicks: events.filter(e => e.name === 'click_contact').length,
    byEvent: {}
  };
  
  events.forEach(event => {
    stats.byEvent[event.name] = (stats.byEvent[event.name] || 0) + 1;
  });
  
  return stats;
};

/**
 * Fonction pour exporter les données (pour analyse)
 */
export const exportAnalytics = () => {
  const events = JSON.parse(localStorage.getItem('ryvie_analytics') || '[]');
  const dataStr = JSON.stringify(events, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `ryvie-analytics-${new Date().toISOString()}.json`;
  link.click();
};

// Afficher les stats dans la console au démarrage (debug)
if (ENABLE_CONSOLE_LOG) {
  console.log('📊 Ryvie Analytics initialized');
  console.log('📊 Current stats:', getLocalStats());
  console.log('📊 To export data: window.exportRyvieAnalytics()');
}

// Exposer les fonctions utiles globalement pour debug
if (typeof window !== 'undefined') {
  window.getRyvieStats = getLocalStats;
  window.exportRyvieAnalytics = exportAnalytics;
}
