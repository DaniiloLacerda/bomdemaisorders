import { Schema, model } from 'mongoose';

const Vendor = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

export default model('Vendor', Vendor)