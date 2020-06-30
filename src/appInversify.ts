import "reflect-metadata";
import * as express from 'express';
import container from "./inversify.config";
import { InversifyExpressServer, interfaces, TYPE } from "inversify-express-utils";

import './controllers/category.controller';
import DataBase from "./config/db";

const app = express();
const dataBase = new DataBase();

dataBase.createConnection();
let server = new InversifyExpressServer(container, null, { rootPath: "/api" }, app);

let appConfigured = server.build();
let serve = appConfigured.listen(process.env.PORT || 3000, () => `App running on ${serve.address().port}`);