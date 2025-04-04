import express from 'express';

import { envs } from './config/envs.config.js';
import { dbConnect } from './config/db.config.js';


const app = express();

dbConnect();

// Middleware para habilitar CORS

//Middleware para parsear el body a JSON

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware de rutas

//Middleware de errores

app.listen(envs.port, () => {;
    console.log(`Servidor corriendo en el puerto ${envs.port}`);
});