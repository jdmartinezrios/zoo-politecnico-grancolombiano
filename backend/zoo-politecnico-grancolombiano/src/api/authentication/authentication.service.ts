import { User } from '../../shared/models/user';
import { AuthenticationService } from './domain';

export class AuthenticationServiceImpl extends AuthenticationService {
  public async login(email: string, password: string): Promise<User | null> {
    const userLogged = await User.findOne({
      attributes: { exclude: ['password'] },
      where: { email: email, password: password },
    });
    return userLogged;
  }
}
