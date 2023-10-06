import { Request, Response, Router } from 'express';
import { AuthenticationService } from './domain';
import { AuthenticationServiceImpl } from './authentication.service';
import { ResponsetError } from '../../shared/response.error';
import { HTTP_STATUS, INVALID_LOGIN } from '../../shared/constants';

export class AuthenticationController {
  private static authenticationService: AuthenticationService =
    new AuthenticationServiceImpl();

  public static route(router: Router): Router {
    router.post('/login', this.login.bind(this));
    return router;
  }

  private static async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    try {
      const userLogged = await this.authenticationService.login(email, password);
      if (!userLogged) {
        throw new Error(INVALID_LOGIN);
      }
      res.json(userLogged);
    } catch (error) {
      const errorMessage = new ResponsetError(
        { message: INVALID_LOGIN },
        HTTP_STATUS.BAD_REQUEST,
      );
      res.status(HTTP_STATUS.BAD_REQUEST).json(errorMessage);
    }
  }
}
