"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
var Product_1 = require("../models/Product");
var inversify_1 = require("inversify");
var ProductRepository = /** @class */ (function () {
    function ProductRepository() {
    }
    ProductRepository.prototype.getAll = function () {
        return Product_1.default.find({});
        ;
    };
    ProductRepository.prototype.getByID = function (id) {
        return Product_1.default.findById(id);
    };
    ProductRepository.prototype.create = function (products) {
        return Product_1.default.create(products);
    };
    ProductRepository.prototype.update = function (id, products) {
        return Product_1.default.findByIdAndUpdate(id, products, { new: true });
    };
    ProductRepository.prototype.delete = function (id) {
        return Product_1.default.remove(id);
    };
    ProductRepository = __decorate([
        inversify_1.injectable()
    ], ProductRepository);
    return ProductRepository;
}());
exports.ProductRepository = ProductRepository;
