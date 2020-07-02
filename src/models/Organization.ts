import { Schema, model } from 'mongoose';

const Organization = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    cnpj: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

export default model('Organization', Organization)