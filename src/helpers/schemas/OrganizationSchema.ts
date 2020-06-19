import * as Joi from '@hapi/joi';

const OrganizationSchema = Joi.object({
    name: Joi.string().required()
});

export default OrganizationSchema