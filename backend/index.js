const express = require('express'); // importar express
const cors = require('cors'); // importar cors
const app = express(); // cargar en la constante todas las funcionalidades de express
app.use(express.json()); // Middleware para procesar JSON

app.use(cors()); // habilitar CORS para todas las solicitudes

  const libros = [
    { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
    { id: 2, titulo: 'El principito', autor: 'Antoine de Saint-Exupéry' },
    { id: 3, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes' }
  ];



app.get('/pong', (req, res) => { // nuevo método GET
  res.json({ message: 'Pong_Ortega' }); // envía una respuesta como objeto JSON
});

app.get('/saludar', (req, res) => {
  res.send('hola mundo');
});

app.get('/libros/:id', (req, res) => {
  const libroId = parseInt(req.params.id);
  const libro = libros.find(l => l.id === libroId);

  if (libro) {
    res.json(libro);
  } else {
    res.status(404).json({ mensaje: 'Libro no encontrado' });
  }
});

app.post('/libros', (req, res) => {
  const { titulo, autor } = req.body;

  if (!titulo || !autor) {
    return res.status(400).json({ mensaje: 'Título y autor son obligatorios' });
  }

  const nuevoLibro = {
    id: libros.length + 1,
    titulo,
    autor
  };

  libros.push(nuevoLibro);
  res.status(201).json(nuevoLibro);
});


app.put('/libros/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, autor } = req.body;

  const libroIndex = libros.findIndex(libro => libro.id === parseInt(id));

  if (libroIndex === -1) {
    return res.status(404).json({ mensaje: 'Libro no encontrado' });
  }

  if (!titulo || !autor) {
    return res.status(400).json({ mensaje: 'Título y autor son obligatorios' });
  }

  libros[libroIndex] = { id: parseInt(id), titulo, autor };

  res.status(200).json(libros[libroIndex]);
});

app.delete('/libros/:id', (req, res) => {
  const { id } = req.params;
  const libroIndex = libros.findIndex(libro => libro.id === parseInt(id));

  if (libroIndex === -1) {
    return res.status(404).json({ mensaje: 'Libro no encontrado' });
  }

  libros.splice(libroIndex, 1);
  
  res.status(200).json({ mensaje: 'Libro eliminado exitosamente' });
});

app.get('/libros', (req, res) => {
  const { autor } = req.query;

  if (!autor) {
    return res.status(400).json({ mensaje: 'Debes proporcionar un autor para filtrar' });
  }

  const librosFiltrados = libros.filter(libro => libro.autor.toLowerCase().includes(autor.toLowerCase()));

  if (librosFiltrados.length === 0) {
    return res.status(404).json({ mensaje: 'No se encontraron libros para el autor proporcionado' });
  }

  res.status(200).json(librosFiltrados);
});

app.get('/libros', (req, res) => {
  res.json(libros);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000/');
});