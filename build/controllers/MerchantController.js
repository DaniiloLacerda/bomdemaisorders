"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Merchant_1 = require("../models/Merchant");
var MerchantController = /** @class */ (function () {
    function MerchantController() {
    }
    MerchantController.prototype.getAll = function () {
        return Merchant_1.default.find({});
        ;
    };
    MerchantController.prototype.getByID = function (id) {
        return Merchant_1.default.findById(id);
    };
    MerchantController.prototype.create = function (merchant) {
        return Merchant_1.default.create(merchant);
    };
    MerchantController.prototype.update = function (id, merchants) {
        return Merchant_1.default.findByIdAndUpdate(id, merchants, { new: true });
    };
    MerchantController.prototype.delete = function (id) {
        return Merchant_1.default.remove(id);
    };
    return MerchantController;
}());
exports.default = new MerchantController();
