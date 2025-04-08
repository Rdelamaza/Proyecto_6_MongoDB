import { NotFoundError, ProductosError } from '../errors/TypeError.js';
import { Productos } from '../models/Productos.model.js';


export const getAllProductosService = async () => {
    try {
        const productos = await Productos.find();

        if(productos.length === 0 || productos === null){
            throw new NotFoundError(
                'No se encontraron productos',
                'No se encontraron productos en la base de datos'
            );

        }
        return productos;
    } catch (error) {
        throw new ProductosError('Error al intentar obtener los productos', error);
    
        
    };
};


export const getProductoByIdService = async (id) => {
    try {
        const producto = await Productos.findById(id);

        if (!producto) {
            throw new NotFoundError (
                `No se encontró el producto con el id: ${id}`,
                `No se encontró el producto con el id: ${id}, en la base de datos`
            );
        }
        return producto;
    } catch (error) {
        throw new ProductosError('Error al intentar obtener un producto por ID', error);

    }
};

export const createProductosService = async (dataProducto) => {
    try {
        //validar datos

        const producto = await Productos.create(dataProducto);

        return producto;
        
    } catch (error) {
        throw new ProductosError('Error al intentar crear un producto', 500, error);
        
    }
};