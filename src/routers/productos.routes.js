import { Router } from 'express';
import { getAllProductos, getProductoById } from '../controllers/productos.controller.js';

const router = Router();

router.get('/productos', getAllProductos);
router.get('/productos/:id',getProductoById);

export default router;
