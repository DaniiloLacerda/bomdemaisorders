import CategoryController from '../controllers/CategoryController';
import * as httpStatus from 'http-status';

const sendResponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data });
}

class CategoryRoutes {

    constructor() { }

    getAll(req, res) {
        CategoryController
            .getAll()
            .then(product => sendResponse(res, httpStatus.OK, product))
            .catch(err => console.error.bind(console, 'Erro: ' + err));
    }

    getByID(req, res) {
        const id = { _id: req.params.id };
        if (!id) {
            sendResponse(res, httpStatus.OK, 'Categoria não encontrado');
        }

        CategoryController
            .getByID(id)
            .then(product => sendResponse(res, httpStatus.OK, product))
            .then(err => console.error.bind(console, 'Erro: ' + err));
    };

    create(req, res) {
        const product = req.body;
        CategoryController
            .create(product)
            .then(product => sendResponse(res, httpStatus.CREATED, "Categoria Criado com Sucesso"))
            .catch(err => console.error.bind(console, 'Erro: ' + err));
    }

    update(req, res) {
        const id = { _id: req.params.id }
        const product = req.body;
        CategoryController
            .update(id, product)
            //como retornar novo produto alterado
            .then(product => sendResponse(res, httpStatus.OK, 'Categoria Alterado com Sucesso'))
            .catch(err => console.error.bind(console, 'Error: ' + err))
    }

    delete(req, res) {
        const id = { _id: req.params.id }
        CategoryController
            .delete(id)
            .then(result => sendResponse(res, httpStatus.OK, result))
            .catch(err => console.error.bind(console, 'Erro: ' + err));
    }
}


export default new CategoryRoutes();