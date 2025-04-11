import { getProductoByIdService, getAllProductosService,createProductosService,updateProductoByIdService, 
    softDeleteProductoByIdService, permaDeleteProductoByIdService } from '../services/productos.service.js';
import { response } from '../utils/templates/response.template.js';


// GET ALL PRODUCTOS, CONTROLADOR PARA OBTENER TODOS LOS PRODUCTOS
export const getAllProductos = async (req, res, next) => {
    try {
        const productos = await getAllProductosService();

        response(res, productos, 200, 'Productos obtenidos correctamente');
        
    } catch (error) {
        next(error);
    };

};
// GET PRODUCTO BY ID, CONTROLADOR PARA OBTENER UN PRODUCTO POR ID
export const getProductoById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const producto =  await getProductoByIdService(id);
        
        response(res, producto, 200, `Producto con el id: ${id} obtenido correctamente`);
        
    } catch (error) {
        next(error);
        
    };
};


// CONTROLADOR  PARA CREAR UN PRODUCTO
export const createProducto = async (req, res, next) => {
    try {
        const dataProducto = req.body;
        const productos = await createProductosService(dataProducto);

        response(res, productos, 201, 'Producto creado correctamente');
        
    } catch (error) {
        next(error);
    };  
};

// CONTROLADOR PARA ACTUALIZAR UN PRODUCTO POR ID
export const updateProductoById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dataProducto = req.body;

        const [productoAntiguo,productoActualizado] = await updateProductoByIdService(id, dataProducto);

        const custom = {
            oldData : productoAntiguo,
        };

        response(res, productoActualizado, 201, `Producto con el id: ${id} actualizado correctamente`, custom);

        
    } catch (error) {
        next(error);
        
    };
};


// HARD DELETE PRODUCTO BY ID, CONTROLADOR PARA ELIMINAR UN PRODUCTO POR ID

export const permaDeleteProductoById = async( req,res, next ) => {

    try {
        
        const { id } = req.params;
        const producto = await permaDeleteProductoByIdService(id);

        response(res, producto, 200, `Producto con el id: ${id} eliminado correctamente`);

    } catch (error) {
        next(error);
        
    }
};

//SOFT DELETE PRODUCTO BY ID, CONTROLADOR PARA ELIMINAR UN PRODUCTO POR ID

export const softDeleteProductoById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const producto = await softDeleteProductoByIdService(id);

        response(res, producto, 200, `Producto con el id: ${id} eliminado correctamente`);
        
    } catch (error) {
        next(error);
        
    };
};