```markdown
# TP API REST JWT avec Docker

![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

**Projet réalisé dans le cadre d'un TP**  
*Développé par AZIZ ABADA*

---

## 📝 Description

Ce projet est un TP complet démontrant la création d'une API REST sécurisée avec :
- **Node.js** et **Express** pour le backend
- **JWT** pour l'authentification
- **MongoDB** comme base de données
- **React.js** pour le frontend
- **Docker** pour le déploiement conteneurisé

---

## 🏗 Architecture

![Architecture Diagram](https://i.imgur.com/JZQZQZQ.png)

Le projet suit une architecture microservices avec 3 composants principaux :

| Composant       | Technologies                          | Port  |
|-----------------|---------------------------------------|-------|
| **Backend**     | Node.js, Express, JWT, MongoDB       | 5000  |
| **Frontend**    | React.js                              | 3000  |
| **Base de données** | MongoDB                            | 27017 |

---

## 📂 Structure du projet

```
TP_API_REST_JWT_DOCKER/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   ├── .env
│   ├── Dockerfile
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── Profile.js
│   │   ├── services/
│   │   │   └── api.js
│   │   └── App.js
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## 🚀 Installation & Déploiement

### Prérequis
- Docker 20.10+
- Docker Compose 1.29+

### 1. Cloner le dépôt
```bash
git clone https://github.com/AZIZABADA10/TP_API_REST_JWT_DOCKER.git
cd TP_API_REST_JWT_DOCKER
```

### 2. Configurer les variables d'environnement
```bash
cp Backend/.env.example Backend/.env
cp frontend/.env.example frontend/.env
```

### 3. Lancer les services
```bash
docker-compose up --build
```

### 4. Accéder aux services
| Service       | URL                          |
|---------------|------------------------------|
| Frontend      | http://localhost:3000        |
| Backend API   | http://localhost:5000/api    |
| MongoDB       | mongodb://localhost:27017    |

---

## ✨ Fonctionnalités

### Backend
- ✅ Authentification JWT
- ✅ CRUD utilisateurs
- ✅ Middleware de sécurité
- ✅ Validation des données

### Frontend
- 🖥 Interface utilisateur React
- 🔐 Pages Login/Register/Profile
- 🔄 Communication avec l'API

---

## 🛠 Technologies utilisées

| Catégorie       | Technologies                                                                 |
|-----------------|------------------------------------------------------------------------------|
| Backend         | ![Node.js](https://img.shields.io/badge/Node.js-14.17.0-green) ![Express](https://img.shields.io/badge/Express-4.17.1-lightgrey) ![JWT](https://img.shields.io/badge/JWT-8.5.1-yellow) |
| Base de données | ![MongoDB](https://img.shields.io/badge/MongoDB-5.0-green) |
| Frontend        | ![React](https://img.shields.io/badge/React-17.0.2-blue) |
| Infrastructure  | ![Docker](https://img.shields.io/badge/Docker-20.10-blue) ![Compose](https://img.shields.io/badge/Compose-1.29-lightblue) |

---

## 📚 Documentation

- [Documentation API](http://localhost:5000/api-docs)
- [Schéma de base de données](docs/database-schema.md)

---

## 📜 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 🙏 Remerciements

Projet réalisé dans le cadre de la formation **Développement Digital - Web Full Stack** à l'**ISTA NTIC Safi**.
```

### Améliorations apportées :
1. **Mise en page visuelle** avec badges et tableaux
2. **Structure claire** avec sections bien définies
3. **Diagramme d'architecture** (remplacer l'URL par votre propre image)
4. **Commandes exécutables** dans des blocs de code
5. **Tableau des technologies** avec badges
6. **Responsive design** pour une meilleure lecture
7. **Liens de documentation** intégrés

Pour utiliser ce template :
1. Copiez ce contenu dans votre README.md
2. Remplacez les liens et descriptions par vos propres informations
3. Ajoutez vos propres images dans le dossier `docs/`
4. Personnalisez les badges si nécessaire