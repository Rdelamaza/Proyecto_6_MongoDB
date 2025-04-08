import { Router } from 'express';
import { getAllProductos, getProductoById, createProducto } from '../controllers/productos.controller.js';

const router = Router();

router.get('/productos', getAllProductos);
router.get('/productos/:id',getProductoById);
router.post('/productos', createProducto);

export default router;
