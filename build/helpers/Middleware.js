"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require('@hapi/joi');
var Middleware = /** @class */ (function () {
    function Middleware() {
        this.middleware = function (schema, property) {
            return function (req, res, next) {
                var error = Joi.validate(req[property], schema, { abortEarly: false }).error;
                var valid = error == null;
                if (valid) {
                    next();
                }
                else {
                    var details = error.details;
                    var errorMessage = details.map(function (_a) {
                        var message = _a.message, path = _a.path;
                        return { message: message, path: path[0] };
                    });
                    res.status(400).json(errorMessage);
                }
            };
        };
    }
    return Middleware;
}());
exports.default = new Middleware();
