# Ryvie - Site Web Officiel

Site web ultra moderne et épuré pour Ryvie, votre cloud personnel à la maison.

## 🚀 Démarrage rapide

### Installation des dépendances

```bash
npm install
```

### Lancement en mode développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Build pour la production

```bash
npm run build
```

### Prévisualisation du build

```bash
npm run preview
```

## 📁 Structure du projet

```
ryvie-website/
├── public/
│   ├── images/
│   │   ├── logo.png                    # Logo Ryvie (à ajouter)
│   │   ├── ryvie-device.png           # Photo boîtier Ryvie (à ajouter)
│   │   ├── ryvie-pro.png              # Photo boîtier Ryvie Pro (à ajouter)
│   │   ├── interface-mockup.png       # Capture d'écran interface (à ajouter)
│   │   └── apps/
│   │       ├── rpictures-logo.png     # Logo rPictures (à ajouter)
│   │       ├── rtransfer-logo.png     # Logo rTransfer (à ajouter)
│   │       ├── rdrop-logo.png         # Logo rDrop (à ajouter)
│   │       ├── rdrive-logo.png        # Logo rDrive (à ajouter)
│   │       ├── rai-logo.png           # Logo rAI (à ajouter)
│   │       └── app-*.png              # Logos autres apps (à ajouter)
│   └── videos/
│       ├── video-demarrage.mp4        # Vidéo de démarrage (à ajouter)
│       ├── video-appstore.mp4         # Vidéo App Store (à ajouter)
│       └── video-rai.mp4              # Vidéo rAI (à ajouter)
├── src/
│   ├── components/                     # Tous les composants React
│   ├── App.jsx                         # Composant principal
│   ├── main.jsx                        # Point d'entrée
│   └── index.css                       # Styles globaux
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans `tailwind.config.js` :
- `ryvie-blue`: #5DCCF5 (bleu principal)
- `ryvie-dark`: #0F172A (texte sombre)
- `ryvie-gray`: #64748B (texte secondaire)

### Ajout d'images

1. **Logo Ryvie** : Placez votre logo dans `public/images/logo.png`
2. **Boîtiers** : Ajoutez les photos des boîtiers dans `public/images/`
3. **Logos d'applications** : Placez-les dans `public/images/apps/`
4. **Vidéos** : Ajoutez vos vidéos dans `public/videos/`

Le site utilise des placeholders qui se remplaceront automatiquement quand vous ajouterez les vraies images.

### Modification des liens GitHub

Recherchez et remplacez les URLs GitHub dans :
- `src/components/Header.jsx`
- `src/components/OpenSource.jsx`
- `src/components/Footer.jsx`

## 📱 Sections du site

1. **Header** - Navigation fixe avec liens et CTA
2. **Hero** - Section d'accueil avec slogan principal
3. **Pourquoi Ryvie** - Contexte et impact
4. **Comment ça marche** - 4 étapes simples
5. **Applications Ryvie** - Présentation des apps (rPictures, rTransfer, rDrop, rDrive, rAI)
6. **App Store** - Catalogue d'applications open source
7. **Accès Global** - Accès partout dans le monde
8. **Cybersécurité** - Sécurité et confidentialité
9. **Offres** - 3 gammes (Économie Circulaire, Pro, OpenCore)
10. **Vidéos** - Démos vidéo (placeholders prêts)
11. **Open Source** - Engagement open source et GitHub
12. **Cas d'usage** - Pour qui ? (Familles, Freelances, TPE/PME, Créateurs)
13. **FAQ** - Questions fréquentes
14. **Footer** - Liens et informations

## 🎯 Fonctionnalités

- ✅ Design ultra moderne et épuré
- ✅ Entièrement responsive (mobile, tablette, desktop)
- ✅ Animations fluides et micro-interactions
- ✅ Navigation smooth scroll
- ✅ Menu mobile hamburger
- ✅ Placeholders pour images et vidéos
- ✅ FAQ avec accordéons
- ✅ Sections optimisées SEO
- ✅ Performance optimale avec Vite

## 🛠️ Technologies utilisées

- **React 18** - Framework UI
- **Vite** - Build tool ultra-rapide
- **TailwindCSS** - Framework CSS utility-first
- **Lucide React** - Icônes modernes
- **PostCSS** - Traitement CSS

## 📝 Notes importantes

### Warnings CSS
Les warnings concernant `@tailwind` et `@apply` dans l'IDE sont normaux. Ce sont des directives TailwindCSS qui seront traitées lors du build. Ils disparaîtront une fois les dépendances installées.

### Placeholders
Le site utilise des placeholders SVG pour les images manquantes. Ils seront automatiquement remplacés quand vous ajouterez les vraies images aux bons emplacements.

### Liens à personnaliser
- URL GitHub : Actuellement `https://github.com/ryvie` (à modifier)
- Réseaux sociaux dans le Footer (à personnaliser)
- Email de contact : `contact@ryvie.fr` (à vérifier)

## 🎬 Ajout de vidéos

Pour ajouter vos vidéos de démonstration :

1. Placez vos fichiers vidéo dans `public/videos/`
2. Nommez-les selon le schéma :
   - `video-demarrage.mp4`
   - `video-appstore.mp4`
   - `video-rai.mp4`
3. Les vidéos s'afficheront automatiquement dans la section Vidéos

Format recommandé : MP4 (H.264), résolution 1920x1080 ou 1280x720

## 🌐 Déploiement

Le site peut être déployé sur :
- Netlify
- Vercel
- GitHub Pages
- Tout hébergeur supportant les sites statiques

Commande de build : `npm run build`
Dossier de sortie : `dist/`

## 📧 Support

Pour toute question ou assistance, contactez l'équipe Ryvie.

---

**Fait avec ❤️ pour reprendre le contrôle de vos données**
