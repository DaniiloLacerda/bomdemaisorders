"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Order = new mongoose_1.Schema({
    organizationId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Organization',
        required: true
    },
    items: {
        type: mongoose_1.Schema.Types.Array,
        ref: 'OrderItems',
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
exports.default = mongoose_1.model('Order', Order);
