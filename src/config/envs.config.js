import dotenv from 'dotenv';


dotenv.config();

export const envs = {
    port: process.env.PORT || 3000,
    db: {
        uri: process.env.MONGO_URI
    },
    autenticacion :{
        saltRounds: process.env.SALT_ROUNDS || 10,
        secretKey: process.env.SECRET_KEY,
        jwtExpire: process.env.JWT_EXPIRE,
    }

};