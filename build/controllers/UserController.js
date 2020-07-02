"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../models/User");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.getAll = function () {
        return User_1.default.find({});
        ;
    };
    UserController.prototype.getByID = function (id) {
        return User_1.default.findById(id);
    };
    UserController.prototype.create = function (user) {
        return User_1.default.create(user);
    };
    UserController.prototype.update = function (id, user) {
        return User_1.default.findByIdAndUpdate(id, user, { new: true });
    };
    UserController.prototype.delete = function (id) {
        return User_1.default.remove(id);
    };
    return UserController;
}());
exports.default = new UserController();
