import { Router } from 'express';
import { getAllProductos, getProductoById, createProducto,updateProductoById, softDeleteProductoById } from '../controllers/productos.controller.js';

const router = Router();

router.get('/productos', getAllProductos);
router.get('/productos/:id',getProductoById);
router.post('/productos', createProducto);
router.put('/productos/:id', updateProductoById);
//ruter.delete permadelete
router.delete('/productos/:id', softDeleteProductoById);

export default router;
