"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("@hapi/joi");
var CategorySchema = Joi.object({
    name: Joi.string().required()
});
exports.default = CategorySchema;
