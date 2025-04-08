//ODM (Object Data Modeling)

import mongoose from 'mongoose';
import { envs } from './envs.config.js';
import { DataBaseError } from '../errors/TypeError.js';

const {db} = envs;

export const dbConnect= async()=>{
    try {
        await mongoose.connect(db.uri);
        console.log('Base de datos MongoDB, conectada');
        
    } catch (error) {
        throw new DataBaseError('Error al conectar a la base de datos',500,error);
        
        
    }
};