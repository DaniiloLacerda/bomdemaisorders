"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var db_1 = require("./config/db");
var OrderRoutes_1 = require("./routes/OrderRoutes");
var OrganizationRoutes_1 = require("./routes/OrganizationRoutes");
var Middleware_1 = require("./helpers/Middleware");
var OrderSchema_1 = require("./helpers/schemas/OrderSchema");
var OrganizationSchema_1 = require("./helpers/schemas/OrganizationSchema");
var MerchantRoutes_1 = require("./routes/MerchantRoutes");
var MerchantSchema_1 = require("./helpers/schemas/MerchantSchema");
var UserRoutes_1 = require("./routes/UserRoutes");
var UserSchema_1 = require("./helpers/schemas/UserSchema");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.middleware();
        this.orderRoutes();
        this.organizationRoutes();
        this.merchantsRoutes();
        this.userRoutes();
        this.database = new db_1.DataBase();
        this.dataBaseConnection();
    }
    ;
    App.prototype.middleware = function () {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    };
    ;
    App.prototype.orderRoutes = function () {
        this.app.route('/api/order').get(OrderRoutes_1.default.getAll);
        this.app.route('/api/order/:id').get(OrderRoutes_1.default.getByID);
        this.app.route('/api/order/:id').delete(OrderRoutes_1.default.delete);
        this.app.route('/api/order').post(Middleware_1.default.middleware(OrderSchema_1.default, 'body'), OrderRoutes_1.default.create);
        this.app.route('/api/order/:id').put(Middleware_1.default.middleware(OrderSchema_1.default, 'body'), OrderRoutes_1.default.update);
    };
    ;
    App.prototype.organizationRoutes = function () {
        this.app.route('/api/organization').get(OrganizationRoutes_1.default.getAll);
        this.app.route('/api/organization/:id').get(OrganizationRoutes_1.default.getByID);
        this.app.route('/api/organization/:id').delete(OrganizationRoutes_1.default.delete);
        this.app.route('/api/organization').post(Middleware_1.default.middleware(OrganizationSchema_1.default, 'body'), OrganizationRoutes_1.default.create);
        this.app.route('/api/organization/:id').put(Middleware_1.default.middleware(OrganizationSchema_1.default, 'body'), OrganizationRoutes_1.default.update);
    };
    ;
    App.prototype.merchantsRoutes = function () {
        this.app.route('/api/merchant').get(MerchantRoutes_1.default.getAll);
        this.app.route('/api/merchant/:id').get(MerchantRoutes_1.default.getByID);
        this.app.route('/api/merchant/:id').delete(MerchantRoutes_1.default.delete);
        this.app.route('/api/merchant').post(Middleware_1.default.middleware(MerchantSchema_1.default, 'body'), MerchantRoutes_1.default.create);
        this.app.route('/api/merchant/:id').put(Middleware_1.default.middleware(MerchantSchema_1.default, 'body'), MerchantRoutes_1.default.update);
    };
    ;
    App.prototype.userRoutes = function () {
        this.app.route('/api/user').get(UserRoutes_1.default.getAll);
        this.app.route('/api/user/:id').get(UserRoutes_1.default.getByID);
        this.app.route('/api/user/:id').delete(UserRoutes_1.default.delete);
        this.app.route('/api/user').post(Middleware_1.default.middleware(UserSchema_1.default, 'body'), UserRoutes_1.default.create);
        this.app.route('/api/user/:id').put(Middleware_1.default.middleware(UserSchema_1.default, 'body'), UserRoutes_1.default.update);
    };
    ;
    App.prototype.dataBaseConnection = function () {
        this.database.createConnection();
    };
    ;
    App.prototype.closeDataBaseConnection = function (message, callback) {
        this.database.closeConnection(message, function () { return callback(); });
    };
    ;
    return App;
}());
;
exports.default = new App();
