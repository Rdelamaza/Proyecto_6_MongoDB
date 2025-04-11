import { response } from '../../utils/templates/response.template.js';
import { getAllDeletedProductosService, 
    getDeletedProductoByIdService,
    restoreProductoByIdService } from '../../services/admin/productos.admin.service.js';

export const getAllDeletedProductos = async (req, res, next) => {
    try {
        const productos = await getAllDeletedProductosService();

        response(res, productos, 200, 'Productos obtenidos correctamente');
        
    } catch (error) {
        next(error);
    };

};
// GET PRODUCTO BY ID, CONTROLADOR PARA OBTENER UN PRODUCTO POR ID
export const getDeletedProductoById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const productos =  await getDeletedProductoByIdService(id);
        
        response(res, productos, 200, `Producto con el id: ${id} obtenido correctamente`);

        
    } catch (error) {
        next(error);
        
    };
};

export const restoreProductoById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const productos =  await restoreProductoByIdService(id);
        response(res, productos, 200, `Producto con el id: ${id} restaurado correctamente`);

        
    } catch (error) {
        next(error);
        
    };
};