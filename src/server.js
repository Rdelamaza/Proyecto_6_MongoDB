import express from 'express';

import { envs } from './config/envs.config.js';
import { dbConnect } from './config/db.config.js';

import productosRouter from './routers/productos.routes.js';
import usuariosRouter from './routers/usuarios.routes.js';
import { errorHandler } from './middlewares/errorhandler.js';


const app = express();

dbConnect();

// Middleware para habilitar CORS

//Middleware para parsear el body a JSON

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware de rutas
app.use ('/api/v1',productosRouter );
app.use ('/api/v1',usuariosRouter );

//Middleware de errores

app.use(errorHandler);


app.listen(envs.port, () => {;
    console.log(`Servidor corriendo en el puerto ${envs.port}`);
});