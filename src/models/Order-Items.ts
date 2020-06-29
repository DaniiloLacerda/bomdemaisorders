import { Schema, model } from 'mongoose';

const OrderItems = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        ref: 'Product._id',
        required: true,
        unique: true
    },
    name: {
        type: Schema.Types.ObjectId,
        ref: 'Product.name',
        required: true
    },
    vendorId: {
        type: Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true
    },
    price: {
        type: String,
        required: true
    },
    totalPrice: {
        type: String,
        required: true
    },
    quantiTy: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

export default model('OrderItems', OrderItems)