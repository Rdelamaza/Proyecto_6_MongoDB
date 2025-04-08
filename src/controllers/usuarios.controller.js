import { NotFoundError } from '../errors/TypeError.js';
import { Usuarios } from '../models/Usuarios.model.js';

export const getAllUsuarios = async (req, res, next) => {
    try {
        const usuarios = await Usuarios.find();

        if(usuarios.length === 0 || usuarios === null){
            throw new NotFoundError (
                'No se encontraron usuarios',
                'No se encontraron usuarios en la base de datos'
            );

        };
        res.status(200).json({
            message: 'Usuarios obtenidos correctamente',
            statusCode:200,
            data: usuarios
        });
        
    } catch (error) {
        next(error);
    };

};

