import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productosSchema = new Schema(
    {
        nombre: {type: String,required: true },
        precio: {type: Number,required: true },
        stock: {type: Number,required: true },
        descripcion: {type: String,required: false },
    },
    { versionkey: false, timestamps: true });

export const Productos = mongoose.model('Productos', productosSchema);