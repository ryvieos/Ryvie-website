# Guide d'ajout des images et vidéos

Ce guide vous explique comment ajouter vos images et vidéos au site Ryvie.

## 📸 Images à ajouter

### 1. Logo Ryvie

**Fichier :** Vous avez fourni le logo (image 1 - logo bleu avec le R stylisé dans un nuage)

**Emplacement :** `public/images/logo.png`

**Instructions :**
1. Sauvegardez l'image du logo fournie
2. Renommez-la en `logo.png`
3. Placez-la dans le dossier `public/images/`

---

### 2. Boîtier Ryvie standard

**Fichier :** Image 2 - Boîtier noir plat avec logo Ryvie embossé

**Emplacement :** `public/images/ryvie-device.png`

**Instructions :**
1. Sauvegardez l'image du boîtier Ryvie standard
2. Renommez-la en `ryvie-device.png`
3. Placez-la dans le dossier `public/images/`

---

### 3. Boîtier Ryvie Pro

**Fichier :** Image 5 - Boîtier noir vertical avec LED bleue et badge "Pro"

**Emplacement :** `public/images/ryvie-pro.png`

**Instructions :**
1. Sauvegardez l'image du boîtier Ryvie Pro
2. Renommez-la en `ryvie-pro.png`
3. Placez-la dans le dossier `public/images/`

---

### 4. Icône cloud (optionnel)

**Fichier :** Images 3 et 4 - Icônes de nuage 3D

**Utilisation :** Ces images peuvent être utilisées comme éléments décoratifs ou backgrounds

**Emplacement suggéré :** `public/images/cloud-icon.png`

---

## 🎨 Logos des applications

Pour chaque application Ryvie, créez ou ajoutez un logo dans le dossier `public/images/apps/`

### Applications à illustrer :

1. **rPictures** → `public/images/apps/rpictures-logo.png`
2. **rTransfer** → `public/images/apps/rtransfer-logo.png`
3. **rDrop** → `public/images/apps/rdrop-logo.png`
4. **rDrive** → `public/images/apps/rdrive-logo.png`
5. **rAI** → `public/images/apps/rai-logo.png`

**Format recommandé :** PNG avec fond transparent, 512x512px minimum

---

## 📱 Capture d'écran de l'interface

**Emplacement :** `public/images/interface-mockup.png`

**Description :** Capture d'écran de l'interface Ryvie montrant le dashboard ou l'App Store

**Format recommandé :** PNG, 1920x1080px ou plus

---

## 🎬 Vidéos de démonstration

### 1. Vidéo de démarrage

**Emplacement :** `public/videos/video-demarrage.mp4`

**Contenu suggéré :**
- Déballage du boîtier
- Branchement et premier démarrage
- Configuration initiale
- Première connexion

**Format :** MP4 (H.264), 1920x1080 ou 1280x720

---

### 2. Vidéo App Store

**Emplacement :** `public/videos/video-appstore.mp4`

**Contenu suggéré :**
- Navigation dans l'App Store
- Installation d'une application en un clic
- Lancement et utilisation d'une app

**Format :** MP4 (H.264), 1920x1080 ou 1280x720

---

### 3. Vidéo rAI

**Emplacement :** `public/videos/video-rai.mp4`

**Contenu suggéré :**
- Présentation de rAI
- Démonstration du filtrage des données sensibles
- Connexion à différentes IA

**Format :** MP4 (H.264), 1920x1080 ou 1280x720

---

## 🎯 Logos App Store (optionnel)

Pour enrichir la section App Store, vous pouvez ajouter des logos d'applications tierces :

**Emplacement :** `public/images/apps/app-1.png`, `app-2.png`, etc.

**Exemples d'applications à illustrer :**
- Nextcloud
- Jellyfin (Netflix perso)
- Bitwarden (gestionnaire de mots de passe)
- Home Assistant (domotique)
- Gitea (Git)
- etc.

---

## ✅ Checklist rapide

- [ ] Logo Ryvie (`logo.png`)
- [ ] Boîtier Ryvie standard (`ryvie-device.png`)
- [ ] Boîtier Ryvie Pro (`ryvie-pro.png`)
- [ ] Capture interface (`interface-mockup.png`)
- [ ] Logo rPictures
- [ ] Logo rTransfer
- [ ] Logo rDrop
- [ ] Logo rDrive
- [ ] Logo rAI
- [ ] Vidéo de démarrage
- [ ] Vidéo App Store
- [ ] Vidéo rAI

---

## 🔄 Rechargement automatique

Une fois les images ajoutées dans les bons dossiers, le site se rechargera automatiquement et affichera vos images à la place des placeholders.

**Note :** Le serveur de développement doit être en cours d'exécution (`npm run dev`)

---

## 💡 Conseils

1. **Optimisation :** Compressez vos images avant de les ajouter (utilisez TinyPNG ou similaire)
2. **Format :** Privilégiez le PNG pour les logos (fond transparent) et JPG pour les photos
3. **Taille :** Les images trop grandes ralentissent le site. Visez 200-500 Ko par image
4. **Vidéos :** Compressez vos vidéos (HandBrake recommandé) pour un chargement rapide

---

## 🆘 Problèmes courants

**L'image ne s'affiche pas :**
- Vérifiez le nom du fichier (respectez exactement les noms indiqués)
- Vérifiez l'emplacement du fichier
- Rechargez la page (Ctrl+R ou Cmd+R)

**La vidéo ne se charge pas :**
- Vérifiez le format (doit être MP4 H.264)
- Vérifiez la taille du fichier (max 50 Mo recommandé)
- Testez la vidéo dans un lecteur local d'abord

---

**Besoin d'aide ?** Consultez le README.md principal pour plus d'informations.
