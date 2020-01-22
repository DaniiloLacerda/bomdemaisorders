import * as Joi from '@hapi/joi';

const OrderSchema = Joi.object({
    name: Joi.string().required()    
});

export default OrderSchema