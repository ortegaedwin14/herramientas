# Dockerfile dentro de dist/

FROM node:20

WORKDIR /app

# Solo copiar archivos ya necesarios (no package.json, no node_modules)
COPY . .

# Asegúrate que .env ya esté copiado a este mismo directorio
EXPOSE 3000

CMD ["node", "index.js"]
