"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("@hapi/joi");
var quantity = Joi.object({
    merchantId: Joi.string().required().label("merchantId da quantidade é obrigatório"),
    qty: Joi.string().required().label("qty quantidade obrigatório")
});
var items = Joi.object({
    id: Joi.string().required().label("Id do item obrigatório"),
    name: Joi.string().required().label("Id do item obrigatório"),
    vendorId: Joi.string().required().label("vendorId do item obrigatório"),
    price: Joi.string().required().label("Preço do item obrigatório"),
    totalPrice: Joi.string().required().label("totalPrice do item obrigatório"),
    quantity: Joi.array().required().items(quantity).label("Quantidade do item obrigatório"),
});
var OrderSchema = Joi.object({
    items: Joi.array().required().items(items).label("items obrigatório"),
    deliveryFee: Joi.string().required(),
    subTotal: Joi.string().required(),
    total: Joi.string().required(),
    organizationId: Joi.string().required()
});
exports.default = OrderSchema;
