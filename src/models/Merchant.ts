import { Schema, model } from 'mongoose';

const Merchant = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    cnpj: {
        type: String,
        required: true,
        unique: true
    },
    organizationId: {
        type: Schema.Types.ObjectId,
        ref: 'Organization',
        required: true
    },
    address: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true,
        unique: false
    },
    state: {
        type: String,
        required: true,
        unique: false
    },
    phone: {
        type: String,
        required: true,
        unique: false
    },
}, {
    timestamps: true
});

export default model('Merchant', Merchant)