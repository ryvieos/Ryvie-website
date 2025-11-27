FROM node:18-alpine

WORKDIR /app

# Copier et installer les dépendances du frontend
COPY package*.json ./
RUN npm ci

# Copier et installer les dépendances du backend
COPY server/package*.json ./server/
RUN cd server && npm ci --only=production

# Copier tous les fichiers
COPY . .

# Build du frontend
RUN npm run build

# Créer le dossier data pour le backend
RUN mkdir -p server/data

# Exposer les ports
EXPOSE 3000 3001

# Script de démarrage pour lancer les deux services
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

CMD ["docker-entrypoint.sh"]
