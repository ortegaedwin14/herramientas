import express from 'express';
import greetRoutes from '../src/greet/greet';
const app = express();
app.use(express.json());
app.use('/greet', greetRoutes);
app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});
