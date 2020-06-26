import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import DataBase from './config/db';
import ProductRoutes from './routes/ProductRoutes';
import CategoryRoutes from './routes/CategoryRoutes';
import VendorRoutes from './routes/VendorRoutes';
import OrderRoutes from './routes/OrderRoutes';
import OrganizationRoutes from './routes/OrganizationRoutes';
import Middleware from './helpers/Middleware';
import ProductSchema from './helpers/schemas/ProductSchema';
import CategorySchema from './helpers/schemas/CategorySchema';
import VendorSchema from './helpers/schemas/VendorSchema';
import OrderSchema from './helpers/schemas/OrderSchema';
import OrganizationSchema from './helpers/schemas/OrganizationSchema';
import MerchantRoutes from './routes/MerchantRoutes';
import MerchantSchema from './helpers/schemas/MerchantSchema';

class App {
    public app: express.Application;
    private database: DataBase;

    constructor() {
        this.app = express();
        this.middleware();
        this.productRoutes();
        this.categoryRoutes();
        this.vendorRoutes();
        this.orderRoutes();
        this.organizationRoutes();
        this.merchantsRoutes();
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
        this.app.route('/api/products').post(Middleware.middleware(ProductSchema, 'body'), ProductRoutes.create);
        this.app.route('/api/products/:id').put(Middleware.middleware(ProductSchema, 'body'), ProductRoutes.update)
    };

    categoryRoutes() {
        this.app.route('/api/category').get(CategoryRoutes.getAll);
        this.app.route('/api/category/:id').get(CategoryRoutes.getByID);
        this.app.route('/api/category/:id').delete(CategoryRoutes.delete)
        this.app.route('/api/category').post(Middleware.middleware(CategorySchema, 'body'), CategoryRoutes.create);
        this.app.route('/api/category/:id').put(Middleware.middleware(CategorySchema, 'body'), CategoryRoutes.update)
    };

    vendorRoutes() {
        this.app.route('/api/vendor').get(VendorRoutes.getAll);
        this.app.route('/api/vendor/:id').get(VendorRoutes.getByID);
        this.app.route('/api/vendor/:id').delete(VendorRoutes.delete)
        this.app.route('/api/vendor').post(Middleware.middleware(VendorSchema, 'body'), VendorRoutes.create);
        this.app.route('/api/vendqor/:id').put(Middleware.middleware(VendorSchema, 'body'), VendorRoutes.update)
    };

    orderRoutes() {
        this.app.route('/api/order').get(OrderRoutes.getAll);
        this.app.route('/api/order/:id').get(OrderRoutes.getByID);
        this.app.route('/api/order/:id').delete(OrderRoutes.delete)
        this.app.route('/api/order').post(Middleware.middleware(OrderSchema, 'body'), OrderRoutes.create);
        this.app.route('/api/order/:id').put(Middleware.middleware(OrderSchema, 'body'), OrderRoutes.update)
    };

    organizationRoutes() {
        this.app.route('/api/organization').get(OrganizationRoutes.getAll);
        this.app.route('/api/organization/:id').get(OrganizationRoutes.getByID);
        this.app.route('/api/organization/:id').delete(OrganizationRoutes.delete)
        this.app.route('/api/organization').post(Middleware.middleware(OrganizationSchema, 'body'), OrganizationRoutes.create);
        this.app.route('/api/organization/:id').put(Middleware.middleware(OrganizationSchema, 'body'), OrganizationRoutes.update)
    };

    merchantsRoutes() {
        this.app.route('/api/merchant').get(MerchantRoutes.getAll);
        this.app.route('/api/merchant/:id').get(MerchantRoutes.getByID);
        this.app.route('/api/merchant/:id').delete(MerchantRoutes.delete)
        this.app.route('/api/merchant').post(Middleware.middleware(MerchantSchema, 'body'), MerchantRoutes.create);
        this.app.route('/api/merchant/:id').put(Middleware.middleware(MerchantSchema, 'body'), MerchantRoutes.update)
    };

    dataBaseConnection() {
        this.database.createConnection();
    };

    closeDataBaseConnection(message, callback) {
        this.database.closeConnection(message, () => callback());
    };
};

export default new App();
