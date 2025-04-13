```markdown
#  TP_API_REST_JWT_DOCKER

Ce projet est une démonstration d'une **API REST sécurisée avec JWT** et **MongoDB**, accompagnée d'une **interface React.js**, le tout orchestré avec **Docker**.

---

##  Structure du projet

```
TP_API_REST_JWT_DOCKER/
│
├── Backend/          # API Express avec JWT & MongoDB
├── frontend/         # Interface React (Register / Login / Profile)
└── docker-compose.yml
```

##  Fonctionnalités

###  Backend (Node.js + Express)
- Authentification sécurisée avec **JWT**
- CRUD utilisateur de base
- Protection des routes avec `authMiddleware`
- Connexion à **MongoDB** via Mongoose

###  Frontend (React.js)
- Pages : `Register`, `Login`, `Profile`
- Authentification via JWT (stocké dans `localStorage`)
- Appels API avec **Axios**

---

##  Utilisation avec Docker

### 1. Cloner le projet

```bash
git clone https://github.com/AZIZABADA10/TP_API_REST_JWT_DOCKER.git
cd TP_API_REST_JWT_DOCKER
```

### 2. Lancer les services

```bash
docker-compose up --build
```

Cela lancera :
- Le backend Node.js
- Le frontend React
- La base de données MongoDB

---

## ⚙️ Variables d'environnement

> À définir dans `.env` (ou dans Render via envVars)

### Backend
```env
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/mydb
JWT_SECRET=supersecret
```

### Frontend (si Vite)
```env
VITE_API_URL=https://api-backend.onrender.com/api
```

---

## 🧑‍💻 Auteur

- **AZIZ ABADA** 