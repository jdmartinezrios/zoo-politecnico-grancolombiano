import { Request, Response } from 'express';
import { APP_NAME } from '../shared/constants';
import { server } from '../index';
import { SERVER_PORT } from '../config';

server.set('port', SERVER_PORT);

server.use('/', (_req: Request, res: Response) => {
  res.send(APP_NAME);
});

server.listen(SERVER_PORT, () => {
  console.log(`Server running in port ${SERVER_PORT}`);
});
