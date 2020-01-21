import VendorController from '../controllers/VendorController';
import * as httpStatus from 'http-status';

const sendResponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data });
}

class VendorRoutes {

    constructor() { }

    getAll(req, res) {
        VendorController
            .getAll()
            .then(product => sendResponse(res, httpStatus.OK, product))
            .catch(err => console.error.bind(console, 'Erro: ' + err));
    }

    getByID(req, res) {
        const id = { _id: req.params.id };
        if (!id) {
            sendResponse(res, httpStatus.OK, 'Vendor não encontrado');
        }

        VendorController
            .getByID(id)
            .then(product => sendResponse(res, httpStatus.OK, product))
            .then(err => console.error.bind(console, 'Erro: ' + err));
    };

    create(req, res) {
        const product = req.body;
        VendorController
            .create(product)
            .then(product => sendResponse(res, httpStatus.CREATED, "Vendor Criado com Sucesso"))
            .catch(err => console.error.bind(console, 'Erro: ' + err));
    }

    update(req, res) {
        const id = { _id: req.params.id }
        const product = req.body;
        VendorController
            .update(id, product)
            //como retornar novo produto alterado
            .then(product => sendResponse(res, httpStatus.OK, 'Vendor Alterado com Sucesso'))
            .catch(err => console.error.bind(console, 'Error: ' + err))
    }

    delete(req, res) {
        const id = { _id: req.params.id }
        VendorController
            .delete(id)
            .then(result => sendResponse(res, httpStatus.OK, result))
            .catch(err => console.error.bind(console, 'Erro: ' + err));
    }
}

export default new VendorRoutes();