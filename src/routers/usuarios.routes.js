import { Router } from 'express';
import { registrarUsuario, 
        getAllUsuarios} from '../controllers/usuarios.controller.js';


const router = Router();

router.post('/registrar', registrarUsuario);
router.get('/', getAllUsuarios);

export default router;