import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { AuthenticationController } from './authentication/authentication.controller';
import { UsersController } from './users/users.controller';
import { AnimalsController } from './animals/animals.controller';
import { ReportsController } from './reports/reports.controller';
import { AttentionsController } from './attentions/attentions.controller';

const api: express.Application = express();
const router: express.Router = express.Router();

api.use(cors());
api.use(bodyParser.json());

api.use('/', UsersController.route(router));
api.use('/', AuthenticationController.route(router));
api.use('/', AnimalsController.route(router));
api.use('/', ReportsController.route(router));
api.use('/', AttentionsController.route(router));

export default api;
