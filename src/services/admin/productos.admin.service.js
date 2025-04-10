import { Productos } from '../../models/Productos.model.js';
import { ProductosError } from '../../errors/TypeError.js';
import { notFoundActiveData} from '../../utils/validate.js';

export const getAllDeletedProductosService = async () => {
    try {
        const productos = await Productos.find({isActive: false});

        notFoundActiveData(productos, 'No se encontraron productos', 'No se encontraron productos en la base de datos');

        return productos;
    } catch (error) {
        throw new ProductosError('Error al intentar obtener los productos', error);
    
        
    };
};


export const getDeletedProductoByIdService = async (id) => {
    try {
        const producto = await Productos.findById(id,{isActive: false});

        notFoundAtiveData(producto, 'No se encontró el producto', `No se encontró el producto con el id: ${id}, en la base de datos`);

    
        return producto;
    } catch (error) {
        throw new ProductosError('Error al intentar obtener un producto por ID', error);

    }
};