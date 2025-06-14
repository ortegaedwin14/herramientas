import { Router, Request, Response } from 'express';
import db, { Param } from './greet.mariadb';

const router = Router();

// Obtener todos los registros
router.get('/', async (_req: Request, res: Response) => {
  const data = await db.getAll();
  res.json(data);
});

// Obtener un registro por ID
router.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const item = await db.getById(id);
  if (item) res.json(item);
  else res.status(404).json({ message: 'No encontrado' });
});

// Crear un nuevo saludo
router.post('/', async (req: Request, res: Response) => {
  const data: Param = req.body;
  const id = await db.create(data);
  res.status(201).json({ id });
});

// Actualizar saludo existente
router.put('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const data: Param = req.body;
  await db.update(id, data);
  res.json({ message: 'Actualizado correctamente' });
});

// Eliminar un saludo
router.delete('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await db.delete(id);
  res.json({ message: 'Eliminado correctamente' });
});

// Obtener estadísticas
router.get('/stats/info', async (_req: Request, res: Response) => {
  const stats = await db.stats();
  res.json(stats);
});

export default router;