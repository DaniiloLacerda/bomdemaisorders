"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Organization = new mongoose_1.Schema({
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
exports.default = mongoose_1.model('Organization', Organization);
