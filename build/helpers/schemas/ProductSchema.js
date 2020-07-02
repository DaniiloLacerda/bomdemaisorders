"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("@hapi/joi");
var Productschema = Joi.object({
    categoryId: Joi.string().required(),
    name: Joi.string().required()
});
exports.default = Productschema;
