import { Schema, model } from 'mongoose';

const Order = new Schema({
    organizationId: {
        type: Schema.Types.ObjectId,
        ref: 'Organization',
        required: true
    },
    items: {
        type: Object,
        required: true,
        unique: false
    },
    deliveryFee: {
        type: String,
        required: true,
        unique: false
    },
    subTotal: {
        type: String,
        required: true,
        unique: false
    },
    total: {
        type: String,
        required: true,
        unique: false
    }
}, {
    timestamps: true
});

export default model('Order', Order)