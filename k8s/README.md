# Déploiement Kubernetes - Ryvie Website

## Prérequis
- Cluster Kubernetes fonctionnel
- kubectl configuré
- Ingress Controller Nginx installé
- Cert-manager installé (pour les certificats SSL)

## Build et Push de l'image Docker

```bash
# Build l'image
docker compose build

# Push vers Docker Hub
docker compose push

# Ou en une commande
docker compose build && docker compose push
```

## Déploiement sur Kubernetes

### 1. Créer le namespace
```bash
kubectl apply -f k8s/namespace.yaml
```

### 2. Créer le PersistentVolumeClaim
```bash
kubectl apply -f k8s/pvc.yaml
```

### 3. Déployer l'application
```bash
kubectl apply -f k8s/deployment.yaml
```

### 4. Créer le service
```bash
kubectl apply -f k8s/service.yaml
```

### 5. Créer l'ingress (optionnel)
```bash
kubectl apply -f k8s/ingress.yaml
```

### Ou tout déployer en une fois
```bash
kubectl apply -f k8s/
```

## Commandes utiles

### Vérifier le déploiement
```bash
kubectl get all -n ryvie
```

### Voir les logs
```bash
kubectl logs -n ryvie -l app=ryvie-website -f
```

### Accéder au pod
```bash
kubectl exec -n ryvie -it deployment/ryvie-website -- sh
```

### Mettre à jour l'image
```bash
# Build et push la nouvelle version
docker compose build
docker compose push

# Redémarrer le déploiement
kubectl rollout restart deployment/ryvie-website -n ryvie
```

### Supprimer le déploiement
```bash
kubectl delete -f k8s/
```

## Structure des fichiers

- **namespace.yaml** : Namespace `ryvie`
- **pvc.yaml** : PersistentVolumeClaim pour les données analytics (1Gi)
- **deployment.yaml** : Déploiement avec 1 replica, health checks, limites de ressources
- **service.yaml** : Service ClusterIP exposant les ports 3000 et 3001
- **ingress.yaml** : Ingress avec SSL pour ryvie.fr et www.ryvie.fr

## Notes

- Le PVC utilise le storageClassName `standard`. Adaptez selon votre cluster.
- L'ingress utilise cert-manager avec l'issuer `letsencrypt-prod`. Assurez-vous qu'il est configuré.
- Les données analytics sont persistées dans le PVC monté sur `/app/server/data`.
