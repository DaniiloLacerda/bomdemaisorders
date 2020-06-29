import * as Joi from '@hapi/joi';

const UserSchema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
    organizationId: Joi.string().required(),
});

export default UserSchema