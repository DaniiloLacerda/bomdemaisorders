import OrderController from '../controllers/OrderController';
import * as httpStatus from 'http-status';

const sendResponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data });
}

class OrderRoutes {

    constructor() { }

    getAll(req, res) {
        OrderController
            .getAll()
            .then(order => sendResponse(res, httpStatus.OK, order))
            .catch(err => console.error.bind(console, 'Erro: ' + err));
    }

    getByID(req, res) {
        const id = { _id: req.params.id };
        if (!id) {
            sendResponse(res, httpStatus.OK, 'Order não encontrada');
        }

        OrderController
            .getByID(id)
            .then(order => sendResponse(res, httpStatus.OK, order))
            .then(err => console.error.bind(console, 'Erro: ' + err));
    };

    create(req, res) {
        const order = req.body;
        OrderController
            .create(order)
            .then(order => sendResponse(res, httpStatus.CREATED, "Order Criada com Sucesso"))
            .catch(err => console.error.bind(console, 'Erro: ' + err));
    }

    update(req, res) {
        const id = { _id: req.params.id }
        const order = req.body;
        OrderController
            .update(id, order)
            //como retornar novo produto alterado
            .then(order => sendResponse(res, httpStatus.OK, 'Order Alterado com Sucesso'))
            .catch(err => console.error.bind(console, 'Error: ' + err))
    }

    delete(req, res) {
        const id = { _id: req.params.id }
        OrderController
            .delete(id)
            .then(result => sendResponse(res, httpStatus.OK, result))
            .catch(err => console.error.bind(console, 'Erro: ' + err));
    }
}

export default new OrderRoutes();