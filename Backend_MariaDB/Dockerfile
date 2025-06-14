# Usa una imagen base oficial de Node
FROM node:18

# Crea y establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia solo lo necesario
COPY package*.json ./

# Instala solo las dependencias necesarias para producción
RUN npm install --only=production

# Copia el código transpilado
COPY dist/ ./dist

# Copia variables de entorno si las necesitas
COPY .env .env

# Expone el puerto si lo necesitas (opcional)
EXPOSE 3000

# Comando de inicio
CMD ["node", "dist/index.js"]
