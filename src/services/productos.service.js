import { ProductosError } from '../errors/TypeError.js';
import { Productos } from '../models/Productos.model.js';
import { notFoundData } from '../utils/validate.js';


export const getAllProductosService = async () => {
    try {
        const productos = await Productos.find();

        notFoundData(productos, 'No se encontraron productos', 'No se encontraron productos en la base de datos');

        return productos;
    } catch (error) {
        throw new ProductosError('Error al intentar obtener los productos', error);
    
        
    };
};


export const getProductoByIdService = async (id) => {
    try {
        const producto = await Productos.findById(id);

        notFoundData(producto, 'No se encontró el producto', `No se encontró el producto con el id: ${id}, en la base de datos`);

    
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

export const updateProductoByIdService = async (id,dataProducto) => {
    try {
        //Validar datos
        const productoAntiguo = await Productos.findOneAndUpdate({_id: id}, dataProducto);

        const productoActualizado = await Productos.findById(id);

        notFoundData(productoAntiguo, 'No se encontró el producto', `No se encontró el producto con el id: ${id}, en la base de datos`);


        return [productoAntiguo, productoActualizado];
        
    } catch (error) {
        throw new ProductosError(`Error al intentar actualizar el producto con el id: ${id}`,500, error);
        
    };
};

//HARD DELETE




//Soft Delete o Delete logico

export const softDeleteProductoByIdService = async (id) => {
    try {
        const producto = await Productos.findByIdAndUpdate(id, {isActive: false});

        notFoundData(producto,
            'No se encontró el producto',
            `No se encontró el producto con el id: ${id}, en la base de datos`);

        return producto;
        
    } catch (error) {
        throw new ProductosError(`Error al intentar eliminar el producto con el id: ${id}`,500, error);
    }
};