import * as httpStatus from 'http-status';
import OrganizationController from '../controllers/OrganizationController';


const sendResponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data });
};

class OrganizationRoutes {

    constructor() { }

    getAll(req, res) {
        OrganizationController
            .getAll()
            .then(result => sendResponse(res, httpStatus.OK, result))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    getByID(req, res) {
        const id = { _id: req.params.id };

        OrganizationController
            .getByID(id)
            .then(result => {
                if (result !== null) {
                    sendResponse(res, httpStatus.OK, result)
                } else {
                    sendResponse(res, httpStatus.OK, "Organizazao não localizado")
                }
            })
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    create(req, res) {
        const order = req.body;

        OrganizationController
            .create(order)
            .then(result => sendResponse(res, httpStatus.CREATED, result))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    update(req, res) {
        const id = { _id: req.params.id };
        const order = req.body;

        OrganizationController
            .update(id, order)
            .then(result => sendResponse(res, httpStatus.OK, result))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    delete(req, res) {
        const order = { _id: req.params.id };

        OrganizationController
            .delete(order)
            .then(result => sendResponse(res, httpStatus.OK, result))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };
};

export default new OrganizationRoutes();