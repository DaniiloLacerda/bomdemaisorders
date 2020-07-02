"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorRepository = void 0;
var Vendor_1 = require("../models/Vendor");
var inversify_1 = require("inversify");
var VendorRepository = /** @class */ (function () {
    function VendorRepository() {
    }
    VendorRepository.prototype.getAll = function () {
        return Vendor_1.default.find({});
        ;
    };
    VendorRepository.prototype.getByID = function (id) {
        return Vendor_1.default.findById(id);
    };
    VendorRepository.prototype.create = function (products) {
        return Vendor_1.default.create(products);
    };
    VendorRepository.prototype.update = function (id, vendors) {
        return Vendor_1.default.findByIdAndUpdate(id, vendors, { new: true });
    };
    VendorRepository.prototype.delete = function (id) {
        return Vendor_1.default.remove(id);
    };
    VendorRepository = __decorate([
        inversify_1.injectable()
    ], VendorRepository);
    return VendorRepository;
}());
exports.VendorRepository = VendorRepository;
