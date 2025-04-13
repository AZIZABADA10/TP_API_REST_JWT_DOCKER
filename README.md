
```markdown
# TP API REST JWT avec Docker

Projet réalisé dans le cadre d'une TP
##  Description

Ce projet est un TP complet qui montre comment créer une API REST sécurisée avec **Node.js**, **Express**, **MongoDB** et **JWT**, et comment la déployer à l'aide de **Docker**. Il inclut également une interface frontend réalisée avec **React.js**.

##  Architecture

Le projet suit une architecture en microservices avec les composants suivants :

- **Backend** (Node.js + Express + JWT + MongoDB)
- **Frontend** (React.js)
- **MongoDB** (Base de données NoSQL)

##  Structure du projet

```
TP_API_REST_JWT_DOCKER/
│
├── Backend/            # Code source de l'API Node.js
│   └── .env            # Variables d'environnement (PORT, MONGO_URI, JWT_SECRET)
│
├── frontend/           # Application frontend React.js
│   └── src/
│       ├── components/
│       │   ├── Login.js
│       │   ├── Register.js
│       │   └── Profile.js
│       └── services/
│           └── api.js
│
├── docker-compose.yml  # Fichier de configuration Docker Compose
└── README.md           # Ce fichier
```

##  Installation

1. **Cloner le dépôt :**

```bash
git clone https://github.com/AZIZABADA10/TP_API_REST_JWT_DOCKER.git
cd TP_API_REST_JWT_DOCKER
```

2. **Lancer les services avec Docker Compose :**

```bash
docker-compose up --build
```

3. **Accéder à l'application :**
- Backend API : `http://localhost:5000`
- Frontend React : `http://localhost:3000`
- MongoDB : `mongodb://localhost:27017/jwt_demo`

##  Fonctionnalités

- Authentification par **JWT**
- Inscription, connexion, et profil utilisateur
- Communication frontend-backend via API REST sécurisée
- Conteneurisation complète avec Docker

##  Réalisé par

Projet réalisé dans le cadre de la formation **Développement Digital - Web Full Stack** à l’**ISTA NTIC Safi**.

##  Technologies utilisées

- Node.js / Express
- MongoDB
- JWT
- React.js
- Docker / Docker Compose
```


-Developper par **AZIZ ABADA** 