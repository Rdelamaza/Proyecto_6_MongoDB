import bcrypt from 'bcryptjs';
import { UserError } from '../errors/TypeError.js';
import { envs } from '../config/envs.config.js';


const { saltRounds } = envs;

export const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, Number(saltRounds));
        return hashedPassword;
    } catch (error) {
        throw new UserError('Error al hashear la contraseña', 401, error);
    }
};


export const comparePassword = async (password, hashedPassword) => {
    try {
        return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
        throw new UserError('Error al comparar la contraseña', 401, error);
        
    }
};