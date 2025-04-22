const express = require('express'); // importar express
const cors = require('cors'); // importar cors
const app = express(); // cargar en la constante todas las funcionalidades de express

app.use(cors()); // habilitar CORS para todas las solicitudes

app.get('/', (req, res) => { // rol a ejecutarse
  res.send('¡Hola, Mundo!');
});

app.get('/ping', (req, res) => { // nuevo método GET
  res.send('Pong'); // envía una respuesta en texto plano directamente
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000/');
});