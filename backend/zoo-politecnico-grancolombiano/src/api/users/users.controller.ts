import { Router, Response, Request } from 'express';
import { User } from '../../shared/models/user';
import { UserServiceImpl } from './user.service';
import { UserService } from './domain';
import { CreateUser } from './user.factory';
import { IUser } from '../../shared/interfaces';
import { ResponsetError } from '../../shared/response.error';
import { HTTP_STATUS, INVALID_USER } from '../../shared/constants';

export class UsersController {
  private static userService: UserService = new UserServiceImpl();

  public static route(router: Router): Router {
    router.get('/users', this.getUsers.bind(this));
    router.post('/users', this.createUser.bind(this));
    router.put('/users', this.updateUser.bind(this));
    router.delete('/users/:id', this.deleteUser.bind(this));
    return router;
  }

  private static async createUser(req: Request, res: Response): Promise<void> {
    const { email, password, role, fullname } = req.body;
    const newUser = new CreateUser({ email, password, role, fullname } as IUser);
    try {
      const userExist = await this.userService.getUserByEmail(email);
      if (userExist) {
        const errorMessage = new ResponsetError(
          { message: INVALID_USER },
          HTTP_STATUS.BAD_REQUEST,
        );
        res.status(HTTP_STATUS.BAD_REQUEST).json(errorMessage);
      } else {
        const user = await this.userService.createUser(newUser.execute());
        res.json(user);
      }
    } catch (error) {
      const errorMessage = new ResponsetError(error, HTTP_STATUS.BAD_REQUEST);
      res.status(HTTP_STATUS.BAD_REQUEST).json(errorMessage);
    }
  }

  private static async getUsers(_req: Request, res: Response): Promise<void> {
    try {
      const users: User[] = await this.userService.getAllUsers();
      res.json(users);
    } catch (error) {
      const errorMessage = new ResponsetError(error, HTTP_STATUS.BAD_REQUEST);
      res.status(HTTP_STATUS.BAD_REQUEST).json(errorMessage);
    }
  }

  private static async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.userService.updateUser(req.body as IUser);
      res.json(user);
    } catch (error) {
      const errorMessage = new ResponsetError(error, HTTP_STATUS.BAD_REQUEST);
      res.status(HTTP_STATUS.BAD_REQUEST).json(errorMessage);
    }
  }

  private static async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const { id: userId } = req.params;
      const user = await this.userService.deleteUser(Number(userId));
      res.json(user);
    } catch (error) {
      const errorMessage = new ResponsetError(error, HTTP_STATUS.BAD_REQUEST);
      res.status(HTTP_STATUS.BAD_REQUEST).json(errorMessage);
    }
  }
}
