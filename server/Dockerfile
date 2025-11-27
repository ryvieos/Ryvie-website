FROM node:18-alpine

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer uniquement les dépendances de production
RUN npm ci --only=production

# Copier le reste des fichiers
COPY . .

# Créer le dossier data s'il n'existe pas
RUN mkdir -p data

# Exposer le port du serveur
EXPOSE 3001

# Démarrer le serveur
CMD ["npm", "start"]
