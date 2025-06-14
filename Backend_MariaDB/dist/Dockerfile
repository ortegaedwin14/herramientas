# Usa una imagen oficial de Node.js
FROM node:20-alpine

# Crea un directorio de trabajo
WORKDIR /app

# Copia solo los archivos necesarios
COPY package*.json ./

# Instala solo dependencias de producción
RUN npm install --only=production

# Copia los archivos compilados y otros necesarios
COPY dist ./dist
COPY .env .env

# Define el comando de inicio
CMD ["node", "dist/index.js"]