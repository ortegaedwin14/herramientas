# Dockerfile dentro de dist/

FROM node:20

WORKDIR /app

# Copiar solo package.json y package-lock.json primero para instalar dependencias
COPY package*.json ./

RUN npm install

# Luego copiar el resto de los archivos (incluye index.js, etc.)
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]