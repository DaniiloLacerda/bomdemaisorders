import * as Joi from '@hapi/joi';

const VendorSchema = Joi.object({
    name: Joi.string().required()
});

export default VendorSchema