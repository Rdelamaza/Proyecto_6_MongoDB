import { Productos } from '../models/Productos.model.js';

export const getAllProductos = async (req, res) => {
    try {
        const productos = await Productos.find();

        res.status(200).json({
            message: ' Productos obtenidos correctamente',
            statusCode:200,
            data: productos
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al obtener los productos',
            statusCode:500,
        });
        
    }
}