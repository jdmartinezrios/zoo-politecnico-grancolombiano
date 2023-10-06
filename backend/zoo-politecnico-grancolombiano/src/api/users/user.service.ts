import { IUser } from '../../shared/interfaces';
import { User } from '../../shared/models/user';
import { UserService } from './domain';

export class UserServiceImpl extends UserService {
  public async getAllUsers(): Promise<User[]> {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
  }

  public async getUserById(userId: number): Promise<User | null> {
    const user = await User.findByPk(userId, { attributes: { exclude: ['password'] } });
    return user;
  }

  public async getUserByEmail(email: string): Promise<User | null> {
    const user = await User.findOne({
      attributes: { exclude: ['password'] },
      where: { email: email },
    });
    return user;
  }

  public async createUser(user: IUser): Promise<User> {
    const createdUser = await User.create({
      role: user.role,
      email: user.email,
      password: user.password,
      fullname: user.fullname,
    });
    return createdUser;
  }
}
