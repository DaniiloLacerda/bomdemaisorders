"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpStatus = require("http-status");
var OrganizationController_1 = require("../controllers/OrganizationController");
var sendResponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data });
};
var OrganizationRoutes = /** @class */ (function () {
    function OrganizationRoutes() {
    }
    OrganizationRoutes.prototype.getAll = function (req, res) {
        OrganizationController_1.default
            .getAll()
            .then(function (result) { return sendResponse(res, httpStatus.OK, result); })
            .catch(function (err) { return sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err); });
    };
    ;
    OrganizationRoutes.prototype.getByID = function (req, res) {
        var id = { _id: req.params.id };
        OrganizationController_1.default
            .getByID(id)
            .then(function (result) {
            if (result !== null) {
                sendResponse(res, httpStatus.OK, result);
            }
            else {
                sendResponse(res, httpStatus.OK, "Organizazao não localizado");
            }
        })
            .catch(function (err) { return sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err); });
    };
    ;
    OrganizationRoutes.prototype.create = function (req, res) {
        var order = req.body;
        OrganizationController_1.default
            .create(order)
            .then(function (result) { return sendResponse(res, httpStatus.CREATED, result); })
            .catch(function (err) { return sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err); });
    };
    ;
    OrganizationRoutes.prototype.update = function (req, res) {
        var id = { _id: req.params.id };
        var order = req.body;
        OrganizationController_1.default
            .update(id, order)
            .then(function (result) { return sendResponse(res, httpStatus.OK, result); })
            .catch(function (err) { return sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err); });
    };
    ;
    OrganizationRoutes.prototype.delete = function (req, res) {
        var order = { _id: req.params.id };
        OrganizationController_1.default
            .delete(order)
            .then(function (result) { return sendResponse(res, httpStatus.OK, result); })
            .catch(function (err) { return sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err); });
    };
    ;
    return OrganizationRoutes;
}());
;
exports.default = new OrganizationRoutes();
