import { Usuarios } from '../models/Usuarios.model.js';

export const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuarios.find();
        res.status(200).json({
            message: 'Usuarios obtenidos correctamente',
            statusCode:200,
            data: usuarios
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al obtener los usuarios',
            statusCode:500,
        });

        
        
    }
};