import { NotFoundError } from '../errors/TypeError.js';
import { Productos } from '../models/Productos.model.js';

export const getAllProductos = async (req, res, next) => {
    try {
        const productos = await Productos.find();

        if(productos.length === 0 || productos === null){
            throw new NotFoundError(
                'No se encontraron productos',
                'No se encontraron productos en la base de datos'
                );

        }

        res.status(200).json({
            message: ' Productos obtenidos correctamente',
            statusCode:200,
            data: productos
        });
        
    } catch (error) {
        next(error);
    };

};
