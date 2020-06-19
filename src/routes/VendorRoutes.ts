import VendorController from '../controllers/VendorController';
import * as httpStatus from 'http-status';

const sendResponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data });
};

class VendorRoutes {

    constructor() { }

    getAll(req, res) {
        VendorController
            .getAll()
            .then(vendor => sendResponse(res, httpStatus.OK, vendor))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    getByID(req, res) {
        const vendor = { _id: req.params.id };

        VendorController
            .getByID(vendor)
            .then(result => {
                if (vendor !== null) {
                    sendResponse(res, httpStatus.OK, result)
                } else {
                    sendResponse(res, httpStatus.OK, "Fornecedor não localizado")
                }
            })
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    create(req, res) {
        const vendor = req.body;
        VendorController
            .create(vendor)
            .then(result => sendResponse(res, httpStatus.CREATED, result))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    update(req, res) {
        const id = { _id: req.params.id }
        const vendor = req.body;
        VendorController
            .update(id, vendor)
            .then(result => sendResponse(res, httpStatus.OK, result))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };

    delete(req, res) {
        const id = { _id: req.params.id }
        VendorController
            .delete(id)
            .then(result => sendResponse(res, httpStatus.OK, result))
            .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
    };
};

export default new VendorRoutes();