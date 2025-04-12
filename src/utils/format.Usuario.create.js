import { ValidationError } from '../errors/TypeError.js';


export const formatUsuarioData = (hashedPassword, ...rest) => {
    
    const [nombre, apellido, email, telefono, fecha_nacimiento, isAdmin = false] = rest;
    if (!nombre || !apellido || !email || !telefono || !fecha_nacimiento || !hashedPassword) 
    {
        throw new ValidationError('Faltan datos obligatorios para crear el usuario');
    }


    return {
        nombre,
        apellido,
        email,
        password: hashedPassword,
        telefono,
        fecha_nacimiento,
        isAdmin
    };
};