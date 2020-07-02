"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var OrderItems = new mongoose_1.Schema({
    id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Product._id',
        required: true,
        unique: true
    },
    name: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Product.name',
        required: true
    },
    vendorId: {
        type: mongoose_1.Schema.Types.ObjectId,
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
exports.default = mongoose_1.model('OrderItems', OrderItems);
