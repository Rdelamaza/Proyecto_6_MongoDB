import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usuariosSchema = new Schema(
    {
        nombre: {type: String,required: true },
        apellido: {type: String,required: true },
        email: {type: String,required: true },
        password: {type: String,required: true },
    },
    {   toJSON:{
        transform: (doc,ret)=>{
            delete ret.__v;
            delete ret.createdAt;
            delete ret.updatedAt;
            delete ret.isActive;
            return ret;
        }
    }, 
        versionkey: false, 
        timestamps: true 
    }
);

export const Usuarios = mongoose.model('usuarios', usuariosSchema);