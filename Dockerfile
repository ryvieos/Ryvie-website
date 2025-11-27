FROM node:18-alpine

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm ci

# Copier le reste des fichiers
COPY . .

# Build de l'application
RUN npm run build

# Exposer le port 3000
EXPOSE 3000

# Démarrer le serveur de preview Vite
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]
