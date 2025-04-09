//ODM (Object Data Modeling)

import mongoose from 'mongoose';
import { envs } from './envs.config.js';
import { DataBaseError } from '../errors/TypeError.js';
import { updateDocsDb } from '../services/db/updateDocsDb.js';


const {db} = envs;

export const dbConnect = async({ updateDocs = false} = {} ) => {
    try {
        await mongoose.connect(db.uri);
        console.log('Base de datos MongoDB, conectada');

        if(updateDocs) {
            await updateDocsDb();
            console.log('Documentos actualizados correctamente');
        }

        
    } catch (error) {
        throw new DataBaseError('Error al conectar a la base de datos',500,error);
        
        
    }
};