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
import { autenticacionMiddleware } from '../middlewares/usuarios.middleware.js';

const router = Router();

router.get('/', getAllProductos);
router.get('/:id',getProductoById);
router.post('/', createProducto);
router.put('/update/:id', updateProductoById);
router.delete('/:id', softDeleteProductoById);

// RUTAS ADMINISTRADOR
router.delete('/admin/:id', autenticacionMiddleware, permaDeleteProductoById);
router.get('/admin/deleted', autenticacionMiddleware,getAllDeletedProductos);
router.get('/admin/deleted/:id', autenticacionMiddleware, getDeletedProductoById);
router.patch('/admin/restore/:id', autenticacionMiddleware, restoreProductoById);

export default router;
