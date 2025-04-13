API REST sécurisée avec JWT et Docker que j'ai développée dans le cadre d'un TP.  
**Fonctionnalités clés** :  
✔️ Authentification JWT  
✔️ Gestion d'utilisateurs  
✔️ Conteneurisation Docker  

##  Technologies utilisées
- **Backend** : Node.js + Express
- **Base de données** : MongoDB + Mongoose
- **Sécurité** : JWT + bcrypt
- **Conteneurisation** : Docker + Docker Compose

# Lancer le projet

```bash
git clone https://github.com/AZIZABADA10/TP_API_REST_JWT_DOCKER.git
cd TP_API_REST_JWT_DOCKER
npm install

# Configurer le .env
cp .env.example .env  # Remplir les variables

# Démarrer MongoDB et l'API
sudo systemctl start mongod  # Linux
npm run dev
```

### Avec Docker 
```bash
git clone https://github.com/AZIZABADA10/TP_API_REST_JWT_DOCKER.git
cd TP_API_REST_JWT_DOCKER

cp .env.example .env  # Optionnel pour personnaliser

# Tout lancer en un commande
docker-compose up --build

##  Configuration
Modifier le fichier `.env` :

JWT_SECRET=ma_clé_secrète
MONGO_URI=mongodb://mongo:27017/tp_api  # Avec Docker


Développé par Abada aziz
