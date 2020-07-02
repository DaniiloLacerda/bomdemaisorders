"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Merchant = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
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
exports.default = mongoose_1.model('Merchant', Merchant);
