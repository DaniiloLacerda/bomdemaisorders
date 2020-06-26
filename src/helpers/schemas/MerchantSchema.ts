import * as Joi from '@hapi/joi';

const MerchantSchema = Joi.object({
    name: Joi.string().required(),
    cnpj: Joi.string().required().min(14).max(14),
    organizationId: Joi.string().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required().max(2),
    phone: Joi.string().required().min(11).max(11),
});

export default MerchantSchema