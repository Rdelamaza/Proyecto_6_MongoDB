

export const response =(res, data, statusCode, message, ...custom) => {
    res.status(statusCode).json({
        message: message || 'Respuesta exitosa',
        statusCode,
        data,
        ...custom
    });

}