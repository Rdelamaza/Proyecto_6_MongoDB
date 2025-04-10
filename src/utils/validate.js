import { NotFoundError} from '../errors/TypeError.js';


export const notFoundData =(data, message,details) => {
    if(!data) throw new NotFoundError(
        message || 'No se encontraron datos',
        details || 'No se encontraron datos en la base de datos'
    );

    if(Array.isArray(data) && data.length === 0) throw new NotFoundError(
        message || 'No se encontraron datos',
        details || 'No se encontraron datos en la base de datos'
    );

};

export const notActiveData = (data, message, details) => {
    if(!data) throw new NotFoundError(
        message || 'No se encontraron datos',
        details || 'No se encontraron datos en la base de datos'
    );

};

export const notFoundActiveData = (data, message, details) => {
    notFoundData(data, message, details);
    notActiveData(data, message, details);
};
