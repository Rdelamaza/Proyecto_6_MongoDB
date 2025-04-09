import { DataBaseError } from "../../errors/TypeError.js"
import { Productos } from "../../models/Productos.model.js";


export const updateDocsDb = async () => {
    try {
        await Productos.updateMany(
            {isActive: {$exists:false} },
            {$set: {isActive: true} }
        );
    } catch (error) {
        throw new DataBaseError('Error al intentar actualizar los documentos de la base de datos', 500, error);
    }
};