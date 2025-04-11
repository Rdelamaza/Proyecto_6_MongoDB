import { response } from '../utils/templates/response.template.js';
import {registerUsuarioService, 
        getAllUsuariosService } from '../services/usuarios.service.js';




export const registrarUsuario = async (req, res, next) => {
    try {
        const dataUsuario = req.body;
        const usuarios = await registerUsuarioService(dataUsuario);

        response(res, usuarios, 201, 'Usuario creado correctamente');
    } catch (error) {   
        next(error);
        
    }
};    

export const getAllUsuarios = async( req, res, next) => {

    try {
        const usuarios = await getAllUsuariosService();

        response(res, usuarios, 200, 'Usuarios obtenidos correctamente');

        
    } catch (error) {
        next(error);    
        
    };
};


