import { getProductoByIdService, getAllProductosService,createProductosService } from '../services/productos.service.js';


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


// CONTROLADOR  PARA CREAR UN PRODUCTO
export const createProducto = async (req, res, next) => {
    try {
        const dataProducto = req.body;
        const productos = await createProductosService(dataProducto);

        res.status(201).json({
            message: 'Producto creado correctamente',
            statusCode:201,
            data: productos,
        });
        
    } catch (error) {
        next(error);
    };  
};


export const updateProductoById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dataProducto = req.body;

        const producto = await updateProductoByIdService(id, dataProducto);
        res.status(201).json({
            message: `Producto con el id : ${id} actualizado correctamente`,
            statusCode:201,
            data: producto,
        });

        
    } catch (error) {
        next(error);
        
    }
}