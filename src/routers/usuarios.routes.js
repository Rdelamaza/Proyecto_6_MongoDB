import { Router } from 'express';
import { registrarUsuario, 
        getAllUsuarios,
        login} from '../controllers/usuarios.controller.js';
import { autenticacionMiddleware } from '../middlewares/usuarios.middleware.js';
import { verifyAdminMiddleware } from '../middlewares/veridyAdmin.middleware.js';


const router = Router();

router.post('/registrar', registrarUsuario);
router.get('/', autenticacionMiddleware,verifyAdminMiddleware, getAllUsuarios);

router.post('/login', login);

export default router;