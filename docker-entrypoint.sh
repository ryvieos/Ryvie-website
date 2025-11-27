#!/bin/sh

# Démarrer le backend en arrière-plan
cd /app/server && node index.js &

# Démarrer le frontend
cd /app && npm run preview -- --host 0.0.0.0 --port 3000
