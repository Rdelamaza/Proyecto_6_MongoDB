import { Router } from 'express';
import productosRouter from './productos.routes.js';
import usuariosRouter from './usuarios.routes.js';


const router = Router();

router.use('/productos', productosRouter);
router.use('/usuarios', usuariosRouter);

export default router;

