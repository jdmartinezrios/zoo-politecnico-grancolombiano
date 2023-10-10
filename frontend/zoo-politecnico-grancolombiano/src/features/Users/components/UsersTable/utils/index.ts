import { IUser } from '../../../../../shared/models/user';
import { SharedPreference } from '../../../../../utils/settings';

export const transformUsers = (users: IUser[]) => {
  const { email } = JSON.parse(SharedPreference.getItem({ key: 'user' })!);
  return users
    ?.filter((user) => !user.email.includes(email))
    .map((user) => {
      return { key: user.id, ...user } as DataTable;
    });
};

export type DataTable = { key: React.Key } & IUser;
