Proyecto de Autenticación y CRUD con MongoDB

Este proyecto es un backend que maneja autenticación de usuarios y operaciones CRUD, utilizando MongoDB como base de datos y JWT para la seguridad.

1- Características principales

    - Autenticación de usuarios: Registro, login y verificación con JWT
    - Operaciones CRUD para productos: Crear, leer, actualizar y eliminar productos
    - Seguridad: Protección de rutas con middleware de autenticación

2- Tecnologías utilizadas

    - Node.js
    - Express.js
    - MongoDB (con Mongoose)
    - JSON Web Tokens (JWT)
    - Bcrypt (para hashing de contraseñas)
    - Dotenv (para variables de entorno)


3- Instalacion

    - Clonar repositorio git clone  https://github.com/Rdelamaza/Proyecto_6_MongoDB
    - Instalar dependencias
        - npm Install
        - Express.js
        - MongoDB (con Mongoose)
        - JSON Web Tokens (JWT)
        - Bcrypt (para hashing de contraseñas)
        - Dotenv (para variables de entorno)

    - Crear Archivo .env con las variables 
            MONGODB_URI=tu_cadena_de_conexion_mongodb
            JWT_SECRET=tu_secreto_jwt
            PORT=3000
        
4 - Iniciar el servidor 
        - npm run dev en consola

