import { CustomError } from '../errors/CustomErrors.js';
import { InternalServerError } from '../errors/TypeError.js';

export const errorHandler = (err, req, res, _next) => {

    if(!(err instanceof CustomError)){
        err = new InternalServerError(
            err.message || 'Error inesperado',
            err.statusCode || 500,
            err.details || 'Tenemos un error inesperado, por favor contacta a nuestro equipo de soporte'
        );
    };

    const errorResponse = {
        status: 'ERROR',
        message: err.message,
        statusCode: err.statusCode,
        details: err.details 
    };

    console.error(
        `Error: ${err.message}, StatusCode: ${err.statusCode}, Details: ${err.details}`,
    );


    res.status(err.statusCode).json(errorResponse);
    
};