import OrderController from '../controllers/OrderController';
import * as httpStatus from 'http-status';


const sendResponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data });
};

class OrderRoutes {

    constructor() { }

    getAll(req, res) {
        OrderController
            .getAll()
            .then(result => sendResponse(res, httpStatus.OK, result))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    getByID(req, res) {
        const id = { _id: req.params.id };
        
        OrderController
            .getByID(id)
            .then(result => {
                if (result !== null) {
                    sendResponse(res, httpStatus.OK, result)
                } else {
                    sendResponse(res, httpStatus.OK, "Fornecedor não localizado")
                }
            })
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    create(req, res) {
        const order = req.body;
        OrderController
            .create(order)
            .then(result => sendResponse(res, httpStatus.CREATED, result))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    update(req, res) {
        const id = { _id: req.params.id }
        const order = req.body;
        OrderController
            .update(id, order)
            .then(result => sendResponse(res, httpStatus.OK, result))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    delete(req, res) {
        const order = { _id: req.params.id }
        OrderController
            .delete(order)
            .then(result => sendResponse(res, httpStatus.OK, result))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };
};

export default new OrderRoutes();