import * as Joi from '@hapi/joi';

const quantity = Joi.object({
    merchantId: Joi.string().required().label("merchantId da quantidade é obrigatório"),
    qty: Joi.string().required().label("qty quantidade obrigatório")
});

const items = Joi.object({
    id: Joi.string().required().label("Id do item obrigatório"),
    name: Joi.string().required().label("Id do item obrigatório"),
    vendorId: Joi.string().required().label("vendorId do item obrigatório"),
    price: Joi.string().required().label("Preço do item obrigatório"),
    totalPrice: Joi.string().required().label("totalPrice do item obrigatório"),
    quantity: Joi.array().required().items(quantity).label("Quantidade do item obrigatório"),
});

const OrderSchema = Joi.object({
    items: Joi.array().required().items(items).label("items obrigatório"),
    deliveryFee: Joi.string().required(),
    subTotal: Joi.string().required(),
    total: Joi.string().required()
});

export default OrderSchema;
