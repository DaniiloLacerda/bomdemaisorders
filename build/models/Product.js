"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Products = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    categoryId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model('Products', Products);
