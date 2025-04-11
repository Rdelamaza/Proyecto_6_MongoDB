import { Router } from 'express';
import { getAllProductos, 
    getProductoById, 
    createProducto, 
    updateProductoById, 
    softDeleteProductoById, 
    permaDeleteProductoById } from '../controllers/productos.controller.js';
import { getAllDeletedProductos, 
    getDeletedProductoById, 
    restoreProductoById } from '../controllers/admin/productos.admin.controller.js';

const router = Router();

router.get('/', getAllProductos);
router.get('/:id',getProductoById);
router.post('/', createProducto);
router.put('/:id', updateProductoById);
router.delete('/:id', softDeleteProductoById);

// RUTAS ADMINISTRADOR
router.delete('/admin/:id', permaDeleteProductoById);
router.get('/admin/deleted', getAllDeletedProductos);
router.get('/admin/deleted/:id', getDeletedProductoById);
router.patch('/admin/restore/:id', restoreProductoById);

export default router;
