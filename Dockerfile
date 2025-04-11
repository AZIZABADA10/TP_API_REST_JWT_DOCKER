FROM node:18

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances 
RUN npm install --legacy-peer-deps

# Copier le reste du code
COPY . .

EXPOSE 5000

CMD ["node", "server.js"]