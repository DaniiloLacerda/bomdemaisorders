// import * as httpStatus from 'http-status';

// const sendResponse = function (res, statusCode, data) {
//     res.status(statusCode).json({ 'result': data });
// };

// class CategoryRoutes {

//     constructor() { }

//     getAll(req, res) {
//         CategoryController
//             .getAll()
//             .then(result => sendResponse(res, httpStatus.OK, result))
//             .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
//     };

//     getByID(req, res) {
//         const id = { _id: req.params.id };

//         CategoryController
//             .getByID(id)
//             .then(result => {
//                 if (result !== null) {
//                     sendResponse(res, httpStatus.OK, result)
//                 } else {
//                     sendResponse(res, httpStatus.OK, "Fornecedor não localizado")
//                 }
//             }).catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
//     };

//     create(req, res) {
//         const category = req.body;
//         CategoryController
//             .create(category)
//             .then(result => sendResponse(res, httpStatus.CREATED, result))
//             .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
//     };

//     update(req, res) {
//         const id = { _id: req.params.id }
//         const category = req.body;
//         CategoryController
//             .update(id, category)
//             .then(result => sendResponse(res, httpStatus.OK, result))
//             .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
//     };

//     delete(req, res) {
//         const id = { _id: req.params.id }
//         CategoryController
//             .delete(id)
//             .then(result => sendResponse(res, httpStatus.OK, result))
//             .catch(err => sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
//     };
// };

// export default new CategoryRoutes();