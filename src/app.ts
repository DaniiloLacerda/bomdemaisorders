import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import { DataBase } from './config/db';
import OrderRoutes from './routes/OrderRoutes';
import Middleware from './helpers/Middleware';
import OrderSchema from './helpers/schemas/OrderSchema';
class App {
    public app: express.Application;
    private database: DataBase;

    constructor() {
        this.app = express();
        this.middleware();
        this.orderRoutes();
        this.database = new DataBase();
        this.dataBaseConnection();
    };

    middleware() {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    };

    orderRoutes() {
        this.app.route('/api/order').get(OrderRoutes.getAll);
        this.app.route('/api/order/:id').get(OrderRoutes.getByID);
        this.app.route('/api/order/:id').delete(OrderRoutes.delete)
        this.app.route('/api/order').post(Middleware.middleware(OrderSchema, 'body'), OrderRoutes.create);
        this.app.route('/api/order/:id').put(Middleware.middleware(OrderSchema, 'body'), OrderRoutes.update);
    };

    dataBaseConnection() {
        this.database.createConnection();
    };

    closeDataBaseConnection(message, callback) {
        this.database.closeConnection(message, () => callback());
    };
};

export default new App();
