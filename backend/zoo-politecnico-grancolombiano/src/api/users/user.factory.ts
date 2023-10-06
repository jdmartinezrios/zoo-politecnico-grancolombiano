import { INVALID_ROLE_ERROR } from '../../shared/constants';
import { IUser } from '../../shared/interfaces';
import { Roles, RolesClient } from '../../shared/models/roles';

abstract class UserFactory {
  public abstract createUser(): IUser;
}

export class UserCarer implements UserFactory {
  private user: IUser;

  constructor(user: IUser) {
    this.user = user;
  }

  public createUser(): IUser {
    return {
      email: this.user.email,
      password: this.user.password,
      fullname: this.user.fullname,
      role: Roles.Carer,
    } as IUser;
  }
}

export class UserAdmin implements UserFactory {
  private user: IUser;

  constructor(user: IUser) {
    this.user = user;
  }

  public createUser(): IUser {
    return {
      email: this.user.email,
      password: this.user.password,
      fullname: this.user.fullname,
      role: Roles.Admin,
    } as IUser;
  }
}

export class CreateUser {
  private user: IUser;

  constructor(user: IUser) {
    this.user = user;
  }

  execute(): IUser {
    let userCreated: IUser = {} as IUser;

    switch (this.user.role) {
      case RolesClient.Carer: {
        const userFactory = new UserCarer(this.user);
        userCreated = userFactory.createUser();
        break;
      }
      case RolesClient.Admin: {
        const userFactory = new UserAdmin(this.user);
        userCreated = userFactory.createUser();
        break;
      }
      default:
        throw new Error(INVALID_ROLE_ERROR);
    }

    return userCreated;
  }
}
