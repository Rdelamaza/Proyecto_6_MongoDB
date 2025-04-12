import jwt from 'jsonwebtoken';
import { envs } from '../config/envs.config.js';
import { UserError } from '../errors/TypeError.js';

const { secretKey } = envs.autenticacion;

export const autenticacionMiddleware = (req, res, next) => {
    try {
        const {autorizacion} = req.headers;
        const token = autorizacion.startsWith('Bearer ') ?
            autorizacion.slice(7) :null;
        if (!token) throw new UserError('Token no válido', 401);

        const decoded = jwt.verify(token, secretKey);
        req.usuario = decoded;
        next();

    } catch (error) {
        throw new UserError('Token Invalido', 500, error);
        
    };
};