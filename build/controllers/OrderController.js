"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order_1 = require("../models/Order");
var OrderController = /** @class */ (function () {
    function OrderController() {
    }
    OrderController.prototype.getAll = function () {
        return Order_1.default.find({});
        ;
    };
    OrderController.prototype.getByID = function (id) {
        return Order_1.default.findById(id);
    };
    OrderController.prototype.create = function (order) {
        return Order_1.default.create(order);
    };
    OrderController.prototype.update = function (id, order) {
        return Order_1.default.findByIdAndUpdate(id, order, { new: true });
    };
    OrderController.prototype.delete = function (id) {
        return Order_1.default.remove(id);
    };
    return OrderController;
}());
exports.default = new OrderController();
