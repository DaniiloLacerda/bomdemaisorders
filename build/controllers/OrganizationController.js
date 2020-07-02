"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Organization_1 = require("../models/Organization");
var OrganizationController = /** @class */ (function () {
    function OrganizationController() {
    }
    OrganizationController.prototype.getAll = function () {
        return Organization_1.default.find({});
        ;
    };
    OrganizationController.prototype.getByID = function (id) {
        return Organization_1.default.findById(id);
    };
    OrganizationController.prototype.create = function (organization) {
        return Organization_1.default.create(organization);
    };
    OrganizationController.prototype.update = function (id, organizations) {
        var organization = {
            name: organizations.name
        };
        return Organization_1.default.findByIdAndUpdate(id, organization, { new: true });
    };
    OrganizationController.prototype.delete = function (id) {
        return Organization_1.default.remove(id);
    };
    return OrganizationController;
}());
exports.default = new OrganizationController();
