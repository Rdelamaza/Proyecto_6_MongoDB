import jwt from 'jsonwebtoken';

import { UserError } from '../errors/TypeError.js';
import { Usuarios } from '../models/Usuarios.model.js';
import { comparePassword, hashPassword } from '../utils/hashPassword.js';
import { formatUsuarioData } from '../utils/format.Usuario.create.js';
import { notFoundData } from '../utils/validate.js';

import { envs } from '../config/envs.config.js';

const { secretKey, jwtExpire } = envs.autenticacion;



// SERVICIO PARA CREAR UN USUARIO EN LA BASE DE DATOS (POST)
export const registerUsuarioService = async ({
    nombre, 
    apellido, 
    email, 
    password, 
    telefono, 
    fecha_nacimiento, 
    isAdmin = false
}) => {
    try {
        const hashedPassword = await hashPassword(password);

        const usuarioData = formatUsuarioData(hashedPassword, 
            nombre, 
            apellido, 
            email, 
            telefono, 
            fecha_nacimiento, 
            isAdmin);

            console.log(usuarioData);
            

        const usuario = await Usuarios.create(usuarioData);
        
        return usuario;
    
        
    } catch (error) {
        
        throw new UserError('Error al registrar el usuario', 401, error);

        
    };
};



// SERVICIO PARA OBTENER TODOS LOS USUARIOS DE LA BASE DE DATOS (GET)

export const getAllUsuariosService = async () => {
    try {
        const usuarios = await Usuarios.find({isActive: true});
        console.log(usuarios);
        
        
        notFoundData(usuarios, 'No se encontraron usuarios', 'No se encontraron usuarios en la base de datos');

        return usuarios;
    } catch (error) {
        throw new UserError('Error al obtener los usuarios', error);
        
    }
};

//LOGIN DE USUARIO

export const loginUsuarioService = async ({email, password}) => {
    try {
        const usuario = await Usuarios.findOne({email});
        notFoundData(usuario, 'No se encontró el usuario', 'No se encontró el usuario en la base de datos');

        const passwordMatch = await comparePassword(password, usuario.password);

        if(!usuario || !passwordMatch) {
            throw new UserError('Usuario o contraseña incorrectos', 401);
        };

        const token = jwt.sign({
            id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            isAdmin: usuario
        },secretKey, {expiresIn: jwtExpire});

        return [usuario, token];

    } catch (error) {
        throw new UserError('Error al iniciar sesión', error);
        
    }
};