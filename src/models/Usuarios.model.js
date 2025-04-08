import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usuariosSchema = new Schema(
    {
        nombre: {type: String,required: true },
        apellido: {type: String,required: true },
        email: {type: String,required: true },
        password: {type: String,required: true },
    },
    { versionkey: false, timestamps: true }
);

export const Usuarios = mongoose.model('Usuarios', usuariosSchema);