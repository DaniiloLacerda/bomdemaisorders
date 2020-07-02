"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpStatus = require("http-status");
var UserController_1 = require("../controllers/UserController");
var sendResponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data });
};
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
    }
    UserRoutes.prototype.getAll = function (req, res) {
        UserController_1.default
            .getAll()
            .then(function (user) { return sendResponse(res, httpStatus.OK, user); })
            .catch(function (err) { return sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err); });
    };
    ;
    UserRoutes.prototype.getByID = function (req, res) {
        var user = { _id: req.params.id };
        UserController_1.default
            .getByID(user)
            .then(function (result) {
            if (user !== null) {
                sendResponse(res, httpStatus.OK, result);
            }
            else {
                sendResponse(res, httpStatus.OK, "Usuario Nao encontrado");
            }
        })
            .catch(function (err) { return sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err); });
    };
    ;
    UserRoutes.prototype.create = function (req, res) {
        var user = req.body;
        UserController_1.default
            .create(user)
            .then(function (result) { return sendResponse(res, httpStatus.CREATED, result); })
            .catch(function (err) { return sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err); });
    };
    ;
    UserRoutes.prototype.update = function (req, res) {
        var id = { _id: req.params.id };
        var user = req.body;
        UserController_1.default
            .update(id, user)
            .then(function (result) { return sendResponse(res, httpStatus.OK, result); })
            .catch(function (err) { return sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err); });
    };
    ;
    UserRoutes.prototype.delete = function (req, res) {
        var id = { _id: req.params.id };
        UserController_1.default
            .delete(id)
            .then(function (result) { return sendResponse(res, httpStatus.OK, result); })
            .catch(function (err) { return sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err); });
    };
    ;
    return UserRoutes;
}());
;
exports.default = new UserRoutes();
