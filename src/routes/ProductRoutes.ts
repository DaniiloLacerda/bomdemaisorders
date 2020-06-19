import ProductController from '../controllers/ProductController';
import * as httpStatus from 'http-status';
import Middleware from '../helpers/Middleware';
import ProductSchema from '../helpers/schemas/ProductSchema';

const sendResponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data });
};
class ProductRoutes {

    constructor() { }

    getAll(req, res) {
        ProductController
            .getAll()
            .then(product => sendResponse(res, httpStatus.OK, product))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    getByID(req, res) {
        const id = { _id: req.params.id };
        ProductController
            .getByID(id)
            .then(result => sendResponse(res, httpStatus.OK, result))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    create(req, res) {
        const product = req.body;

        ProductController
            .create(product)
            .then(result => sendResponse(res, httpStatus.CREATED, result))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    update(req, res) {
        const id = { _id: req.params.id };
        const product = req.body;;

        ProductController
            .update(id, product)
            .then(result => {
                if (result !== null) {
                    sendResponse(res, httpStatus.OK, result)
                } else {
                    sendResponse(res, httpStatus.OK, "Fornecedor não localizado")
                }
            })
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    delete(req, res) {
        const id = { _id: req.params.id };

        ProductController
            .delete(id)
            .then(result => sendResponse(res, httpStatus.OK, result))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };
};

export default new ProductRoutes();