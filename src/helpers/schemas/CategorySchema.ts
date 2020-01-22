import * as Joi from '@hapi/joi';

const CategorySchema = Joi.object({
    name: Joi.string().required()
});

export default CategorySchema