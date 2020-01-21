import { Schema, model } from 'mongoose';

const Order = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

export default model('Order', Order)