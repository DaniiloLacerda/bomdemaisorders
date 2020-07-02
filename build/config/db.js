"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = void 0;
var mongoose = require("mongoose");
var DataBase = /** @class */ (function () {
    function DataBase() {
        this.DB_URI = 'mongodb://localhost:17017/bomdemaispedidos';
    }
    DataBase.prototype.createConnection = function () {
        mongoose.connect(this.DB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });
        this.logger(this.DB_URI);
    };
    DataBase.prototype.closeConnection = function (message, callback) {
        this.DB_CONNECTION.close(function () {
            console.log('Mongoose foi desconectado pelo: ' + message);
            callback();
        });
    };
    DataBase.prototype.logger = function (uri) {
        this.DB_CONNECTION = mongoose.connection;
        this.DB_CONNECTION.on('connected', function () { return console.log('Mongoose está conectado ao ' + uri); });
        this.DB_CONNECTION.on('error', function (error) { return console.error.bind(console, "Erro na conexão: " + error); });
        this.DB_CONNECTION.on('disconnected', function () { return console.log("Mongoose está desconectado do " + uri); });
    };
    return DataBase;
}());
exports.DataBase = DataBase;
