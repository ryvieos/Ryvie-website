# Ryvie Analytics Server

Backend simple pour collecter et analyser les événements du site Ryvie.

## Installation

```bash
cd server
npm install
```

## Démarrage

```bash
# Mode production
npm start

# Mode développement (avec auto-reload)
npm run dev
```

Le serveur démarre sur le port **3001** par défaut.

## Endpoints disponibles

### 📊 Recevoir un événement
```
POST /api/analytics
Content-Type: application/json

{
  "name": "download_desktop",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "os": "Windows",
  "url": "https://ryvie.fr",
  "userAgent": "..."
}
```

### 📈 Voir les statistiques
```
GET /api/analytics/stats
```

Retourne :
- Total d'événements
- Nombre de téléchargements
- Clics démo
- Pré-commandes
- Clics GitHub
- Clics contact
- Répartition par événement
- Répartition par OS
- Répartition par date
- 10 derniers événements

### 📥 Exporter toutes les données
```
GET /api/analytics/export
```

Retourne toutes les données brutes en JSON.

### 🗑️ Réinitialiser les données
```
DELETE /api/analytics/reset
Content-Type: application/json

{
  "password": "ryvie2024"
}
```

⚠️ **Attention** : Supprime toutes les données analytics.

### ❤️ Health check
```
GET /api/health
```

## Stockage des données

Les événements sont stockés dans `server/data/analytics.json`.

## Configuration du frontend

Dans `src/utils/analytics.js`, décommenter et configurer :

```javascript
const ANALYTICS_ENDPOINT = 'http://localhost:3001/api/analytics';
```

## Sécurité

⚠️ **Pour la production** :
- Ajouter une vraie authentification
- Utiliser HTTPS
- Limiter les requêtes (rate limiting)
- Valider les données entrantes
- Utiliser une vraie base de données (MongoDB, PostgreSQL)
- Ajouter des variables d'environnement (.env)

## Évolutions possibles

- Dashboard web pour visualiser les stats
- Export CSV/Excel
- Filtres par date
- Graphiques en temps réel
- Alertes email
- Intégration avec Google Analytics
