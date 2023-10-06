import express from 'express';
import api from './api';

const server: express.Application = express();
server.use(api);

export { server };
