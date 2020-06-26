import * as Joi from '@hapi/joi';

const OrganizationSchema = Joi.object({
    name: Joi.string().required(),
    cnpj: Joi.string().required().min(14).max(14)
});

export default OrganizationSchema