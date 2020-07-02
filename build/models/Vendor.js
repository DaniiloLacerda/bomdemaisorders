"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Vendor = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    paymentForm: {
        type: String,
        required: true,
        unique: false
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model('Vendor', Vendor);
