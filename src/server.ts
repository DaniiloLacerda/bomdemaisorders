import "reflect-metadata";
import container from "./appcontainer";
import { InversifyExpressServer } from "inversify-express-utils";
import App from './app';
import './controllers/category.controller';
import './controllers/product.controller';
import './controllers/vendor.controller';

process.once('SIGUSR2', () => App.closeDataBaseConnection('nodemon restart', () => process.kill(process.pid, 'SIGUSR2')));
process.on('SIGINT', () => App.closeDataBaseConnection('execução foi interrompida', () => process.exit(0)));
let server = new InversifyExpressServer(container, null, { rootPath: "/api" }, App.app);

const serverInstance = server.build();
serverInstance.listen(5000);

console.log(`Server started on port ${5000} :)`);
