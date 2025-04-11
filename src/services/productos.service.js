import { ProductosError } from '../errors/TypeError.js';
import { Productos } from '../models/Productos.model.js';
import { notFoundData } from '../utils/validate.js';

// GET DE TODOS LOS PRODUCTOS QUE SE ENCUENTRAN ACTIVOS EN LA BASE DE DATOS. (isActive: true)
export const getAllProductosService = async () => {
    try {
        const productos = await Productos.find({isActive: true});

        notFoundData(productos, 'No se encontraron productos', 'No se encontraron productos en la base de datos');

        return productos;
    } catch (error) {
        throw new ProductosError('Error al intentar obtener los productos', error);
    
        
    };
};

// GET DE PRODUCTO POR ID, QUE SE ENCUENTRA ACTIVO EN LA BASE DE DATOS. (isActive: true)
export const getProductoByIdService = async (id) => {
    try {
        const producto = await Productos.findById( {_id: id, isActive: true});

        notFoundData(producto, 'No se encontró el producto', `No se encontró el producto con el id: ${id}, en la base de datos`);

    
        return producto;
    } catch (error) {
        throw new ProductosError('Error al intentar obtener un producto por ID', error);

    }
};

// CONTROLADOR PARA CREAR UN PRODUCTO
export const createProductosService = async (dataProducto) => {
    try {
        //validar datos

        const producto = await Productos.create(dataProducto);

        return producto;
        
    } catch (error) {
        throw new ProductosError('Error al intentar crear un producto', 500, error);
        
    }
};

// CONTROLADOR PARA ACTUALIZAR UN PRODUCTO POR ID
export const updateProductoByIdService = async (id,dataProducto) => {
    try {
        //Validar datos
        const productoAntiguo = await Productos.findOneAndUpdate({_id: id, isActive: true}, dataProducto);

        const productoActualizado = await Productos.findById(id, {isActive: true});

        notFoundData(productoAntiguo, 'No se encontró el producto', `No se encontró el producto con el id: ${id}, en la base de datos`);


        return [productoAntiguo, productoActualizado];
        
    } catch (error) {
        throw new ProductosError(`Error al intentar actualizar el producto con el id: ${id}`,500, error);
        
    };
};

//CONTROLADOR DE PERMADELETE

export const permaDeleteProductoByIdService = async (id) => {
    try {
        const producto = await Productos.findByIdAndDelete(id);

        notFoundData(producto, 'No se encontró el producto', `No se encontró el producto con el id: ${id}, en la base de datos`);

        return producto;
        
    } catch (error) {
        throw new ProductosError(`Error al intentar eliminar el producto con el id: ${id}`,500, error);
    }
};




//SCONTROLADOR DE SOFTDELETE

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