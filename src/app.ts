import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import DataBase from './config/db';
import ProductRoutes from './routes/ProductRoutes';
import CategoryRoutes from './routes/CategoryRoutes';
import VendorRoutes from './routes/VendorRoutes';
import OrderRoutes from './routes/OrderRoutes';

class App {
    public app: express.Application;
    private morgan: morgan.Morgan;
    private bodyParser;
    private database: DataBase;

    constructor() {
        this.app = express();
        this.middleware();
        this.productRoutes();
        this.categoryRoutes();
        this.vendorRoutes();
        this.orderRoutes();
        this.database = new DataBase();
        this.dataBaseConnection();
    };

    middleware() {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    };

    productRoutes() {
        this.app.route('/api/products').get(ProductRoutes.getAll);
        this.app.route('/api/products/:id').get(ProductRoutes.getByID);
        this.app.route('/api/products/:id').delete(ProductRoutes.delete)
        this.app.route('/api/products').post(ProductRoutes.create);
        this.app.route('/api/products/:id').put(ProductRoutes.update)
    };

    categoryRoutes() {
        this.app.route('/api/category').get(CategoryRoutes.getAll);
        this.app.route('/api/category/:id').get(CategoryRoutes.getByID);
        this.app.route('/api/category/:id').delete(CategoryRoutes.delete)
        this.app.route('/api/category').post(CategoryRoutes.create);
        this.app.route('/api/category/:id').put(CategoryRoutes.update)
    };

    vendorRoutes() {
        this.app.route('/api/vendor').get(VendorRoutes.getAll);
        this.app.route('/api/vendor/:id').get(VendorRoutes.getByID);
        this.app.route('/api/vendor/:id').delete(VendorRoutes.delete)
        this.app.route('/api/vendor').post(VendorRoutes.create);
        this.app.route('/api/vendor/:id').put(VendorRoutes.update)
    };

    orderRoutes() {
        this.app.route('/api/order').get(OrderRoutes.getAll);
        this.app.route('/api/order/:id').get(OrderRoutes.getByID);
        this.app.route('/api/order/:id').delete(OrderRoutes.delete)
        this.app.route('/api/order').post(OrderRoutes.create);
        this.app.route('/api/order/:id').put(OrderRoutes.update)
    };

    dataBaseConnection() {
        this.database.createConnection();
    };

    closeDataBaseConnection(message, callback) {
        this.database.closeConnection(message, () => callback());
    };
}
export default new App();
