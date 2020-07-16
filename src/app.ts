import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import { DataBase } from './config/db';
class App {
    public app: express.Application;
    private database: DataBase;

    constructor() {
        this.app = express();
        this.middleware();
        this.database = new DataBase();
        this.dataBaseConnection();
    };

    middleware() {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    };

    dataBaseConnection() {
        this.database.createConnection();
    };

    closeDataBaseConnection(message, callback) {
        this.database.closeConnection(message, () => callback());
    };
};

export default new App();
