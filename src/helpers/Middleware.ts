const Joi = require('@hapi/joi')

class Middleware {

  constructor() { }

  middleware = (schema, property) => {
    return (req, res, next) => {
      const { error } = Joi.validate(req[property], schema, { abortEarly: false });
      const valid = error == null;
      
      if (valid) {
        next();
      } else {
        const { details } = error;
        const errorMessage = details.map(({ message, path }) => { return { message, path: path[0] } });
        res.status(400).json(errorMessage)
      }
    }
  }
}

export default new Middleware();
