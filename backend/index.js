const express = require('express'); // importar express
const cors = require('cors'); // importar cors
const app = express(); // cargar en la constante todas las funcionalidades de express

app.use(cors()); // habilitar CORS para todas las solicitudes


app.get('/pong', (req, res) => { // nuevo método GET
  res.json({ message: 'Pong_Ortega' }); // envía una respuesta como objeto JSON
});

app.get('/saludar', (req, res) => {
  res.send('hola mundo');
});


app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000/');
});