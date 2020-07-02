"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("@hapi/joi");
var Payments_Form_1 = require("../../models/enum/Payments-Form");
var VendorSchema = Joi.object({
    name: Joi.string().required(),
    paymentForm: Joi.string().required().valid([Payments_Form_1.PaymentsForm.CASH, Payments_Form_1.PaymentsForm.DEFERRED]),
});
exports.default = VendorSchema;
