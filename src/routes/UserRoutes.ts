import * as httpStatus from 'http-status';
import UserController from '../controllers/UserController';

const sendResponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data });
};

class UserRoutes {
    constructor() { }

    getAll(req, res) {
        UserController
            .getAll()
            .then(user => sendResponse(res, httpStatus.OK, user))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    getByID(req, res) {
        const user = { _id: req.params.id };
        UserController
            .getByID(user)
            .then(result => {
                if (user !== null) {
                    sendResponse(res, httpStatus.OK, result)
                } else {
                    sendResponse(res, httpStatus.OK, "Usuario Nao encontrado")
                }
            })
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    create(req, res) {
        const user = req.body;
        UserController
            .create(user)
            .then(result => sendResponse(res, httpStatus.CREATED, result))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    update(req, res) {
        const id = { _id: req.params.id }
        const user = req.body;
        UserController
            .update(id, user)
            .then(result => sendResponse(res, httpStatus.OK, result))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    delete(req, res) {
        const id = { _id: req.params.id }
        UserController
            .delete(id)
            .then(result => sendResponse(res, httpStatus.OK, result))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };
};

export default new UserRoutes();