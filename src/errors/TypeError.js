import { CustomError } from './CustomErrors.js';

export class ValidationError extends CustomError {
    constructor(message, details) {
        super(message || 'Error de validación', 400, details);
    
    }
}

export class NotFoundError extends CustomError {
    constructor(message, details) {
        super(message || 'Elemento no encontrado', 404, details);
    }
}

export class DataBaseError extends CustomError {
    constructor(message, statusCode, details) {
        super(message || 'Error en la base de datos',statusCode || 500, details);
    }
}

export class InternalServerError extends CustomError {
    constructor(message,statusCode, details) {
        super(message || 'Error interno del servidor', statusCode || 500, details);
    }
}

export class ProdcutosError extends CustomError {
    constructor(message, details) {
        super(message || 'Error en el producto', 400, details);
    };
}

