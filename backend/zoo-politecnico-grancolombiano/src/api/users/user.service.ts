import { IUser } from '../../shared/interfaces';
import { User } from '../../shared/models/user';
import { UserService } from './domain';

export class UserServiceImpl extends UserService {
  public async getAllUsers(): Promise<User[]> {
    const users = await User.findAll({
      order: [['created_at', 'DESC']],
      attributes: { exclude: ['password'] },
    });
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
    const createdUser = await User.create({ ...user });
    return createdUser;
  }

  public async updateUser(user: IUser): Promise<[affectedRows: number]> {
    const createdUser = await User.update({ ...user }, { where: { id: user.id } });
    return createdUser;
  }

  public async deleteUser(userId: number): Promise<unknown> {
    const deletedUser = await User.destroy({
      where: { id: userId },
    });
    return deletedUser;
  }
}
