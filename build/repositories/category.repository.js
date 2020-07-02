"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
var inversify_1 = require("inversify");
var Category_1 = require("../models/Category");
var CategoryRepository = /** @class */ (function () {
    function CategoryRepository() {
    }
    CategoryRepository.prototype.getAll = function () {
        return Category_1.default.find({});
        ;
    };
    ;
    CategoryRepository.prototype.getByID = function (id) {
        return Category_1.default.findById(id);
    };
    ;
    CategoryRepository.prototype.create = function (category) {
        return Category_1.default.create(category);
    };
    ;
    CategoryRepository.prototype.update = function (id, category) {
        return Category_1.default.findByIdAndUpdate(id, category, { new: true });
    };
    ;
    CategoryRepository.prototype.delete = function (id) {
        return Category_1.default.remove(id);
    };
    ;
    CategoryRepository = __decorate([
        inversify_1.injectable()
    ], CategoryRepository);
    return CategoryRepository;
}());
exports.CategoryRepository = CategoryRepository;
