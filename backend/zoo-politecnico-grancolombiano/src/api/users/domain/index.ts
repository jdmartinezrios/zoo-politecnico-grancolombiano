import { IUser } from '../../../shared/interfaces';
import { User } from '../../../shared/models/user';

export abstract class UserService {
  public abstract getAllUsers(): Promise<User[]>;
  public abstract createUser(user: IUser): Promise<User>;

  public abstract getUserById(userId: number): Promise<User | null>;
  public abstract getUserByEmail(email: string): Promise<User | null>;
}
