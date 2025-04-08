import { getProductoByIdService, getAllProductosService } from '../services/productos.service.js';


// GET ALL PRODUCTOS, CONTROLADOR PARA OBTENER TODOS LOS PRODUCTOS
export const getAllProductos = async (req, res, next) => {
    try {
        const productos = await getAllProductosService();

        res.status(200).json({
            message: ' Productos obtenidos correctamente',
            statusCode:200,
            data: productos
        });
        
    } catch (error) {
        next(error);
    };

};
// GET PRODUCTO BY ID, CONTROLADOR PARA OBTENER UN PRODUCTO POR ID
export const getProductoById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const productos =  await getProductoByIdService(id);
        
        res.status(200).json({
            message: `Producto con el id: ${id}, obtenido correctamente`,
            statusCode:200,
            data: productos
        });

        
    } catch (error) {
        next(error);
        
    };
};
