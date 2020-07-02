"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderController_1 = require("../controllers/OrderController");
var httpStatus = require("http-status");
var sendResponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data });
};
var OrderRoutes = /** @class */ (function () {
    function OrderRoutes() {
    }
    OrderRoutes.prototype.getAll = function (req, res) {
        OrderController_1.default
            .getAll()
            .then(function (result) { return sendResponse(res, httpStatus.OK, result); })
            .catch(function (err) { return sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err); });
    };
    ;
    OrderRoutes.prototype.getByID = function (req, res) {
        var id = { _id: req.params.id };
        OrderController_1.default
            .getByID(id)
            .then(function (result) {
            if (result !== null) {
                sendResponse(res, httpStatus.OK, result);
            }
            else {
                sendResponse(res, httpStatus.OK, "Fornecedor não localizado");
            }
        })
            .catch(function (err) { return sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err); });
    };
    ;
    OrderRoutes.prototype.create = function (req, res) {
        var order = req.body;
        OrderController_1.default
            .create(order)
            .then(function (result) { return sendResponse(res, httpStatus.CREATED, result); })
            .catch(function (err) { return sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err); });
    };
    ;
    OrderRoutes.prototype.update = function (req, res) {
        var id = { _id: req.params.id };
        var order = req.body;
        OrderController_1.default
            .update(id, order)
            .then(function (result) { return sendResponse(res, httpStatus.OK, result); })
            .catch(function (err) { return sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err); });
    };
    ;
    OrderRoutes.prototype.delete = function (req, res) {
        var order = { _id: req.params.id };
        OrderController_1.default
            .delete(order)
            .then(function (result) { return sendResponse(res, httpStatus.OK, result); })
            .catch(function (err) { return sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err); });
    };
    ;
    return OrderRoutes;
}());
;
exports.default = new OrderRoutes();
