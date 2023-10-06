import { User } from '../../../shared/models/user';

export abstract class AuthenticationService {
  public abstract login(email: string, password: string): Promise<User | null>;
}
