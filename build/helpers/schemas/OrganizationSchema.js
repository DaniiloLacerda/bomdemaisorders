"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("@hapi/joi");
var OrganizationSchema = Joi.object({
    name: Joi.string().required(),
    cnpj: Joi.string().required().min(14).max(14)
});
exports.default = OrganizationSchema;
