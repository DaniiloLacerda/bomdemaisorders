"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("@hapi/joi");
var UserSchema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
    organizationId: Joi.string().required(),
});
exports.default = UserSchema;
