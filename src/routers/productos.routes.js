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

router.get('/productos', getAllProductos);
router.get('/productos/:id',getProductoById);
router.post('/productos', createProducto);
router.put('/productos/:id', updateProductoById);
router.delete('/productos/:id', softDeleteProductoById);

// RUTAS ADMINISTRADOR
router.delete('/productos/admin/:id', permaDeleteProductoById);
router.get('/productos/admin/deleted', getAllDeletedProductos);
router.get('/productos/admin/deleted/:id', getDeletedProductoById);
router.patch('/productos/admin/restore/:id', restoreProductoById);

export default router;
