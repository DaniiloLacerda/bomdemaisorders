import * as Joi from '@hapi/joi';

const Productschema = Joi.object({
    categoryId: Joi.string().required(),
    name: Joi.string().required()
});

export default Productschema