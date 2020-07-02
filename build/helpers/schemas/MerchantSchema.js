"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("@hapi/joi");
var MerchantSchema = Joi.object({
    name: Joi.string().required(),
    cnpj: Joi.string().required().min(14).max(14),
    organizationId: Joi.string().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required().max(2),
    phone: Joi.string().required().min(11).max(11),
});
exports.default = MerchantSchema;
