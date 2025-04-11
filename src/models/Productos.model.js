import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productosSchema = new Schema(
    {
        nombre: {type: String,required: true },
        precio: {type: Number,required: true },
        stock: {type: Number,required: true },
        descripcion: {type: String,required: false },
        isActive: {type: Boolean,default: true },
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

export const Productos = mongoose.model('productos', productosSchema);