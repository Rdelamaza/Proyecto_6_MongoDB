import { Router } from 'express';
import { getAllProductos, getProductoById, createProducto,updateProductoById, 
        softDeleteProductoById, permaDeleteProductoById } from '../controllers/productos.controller.js';

const router = Router();

router.get('/productos', getAllProductos);
router.get('/productos/:id',getProductoById);
router.post('/productos', createProducto);
router.put('/productos/:id', updateProductoById);
router.delete('/productos/admin/:id', permaDeleteProductoById);
router.delete('/productos/:id', softDeleteProductoById);

export default router;
