import { Router } from 'express';
import { getAllProductos } from '../controllers/productos.controller.js';

const router = Router();

router.get('/productos', getAllProductos);

export default router;
