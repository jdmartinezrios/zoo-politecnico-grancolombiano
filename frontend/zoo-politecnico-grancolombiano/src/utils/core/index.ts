import { IAnimal } from '../../shared/models/animal';
import { Roles } from '../../shared/models/roles';
import { IUser } from '../../shared/models/user';

type SelectOptions = {
  value: string | number;
  label: string;
}[];

const formatOptions = new Intl.DateTimeFormat('es-CO', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

export const transformUsers = (users: IUser[]): SelectOptions => {
  return users
    ?.filter((user) => user.role.includes(Roles.Carer))
    .map((user) => {
      return { value: user.id, label: user.fullname };
    });
};

export const transformAnimals = (animals: IAnimal[]): SelectOptions => {
  return animals.map((animal) => {
    return { value: animal.id, label: `${animal.name} - (${animal.specie})` };
  });
};

export const formatDate = (date: Date): string => {
  return date ? formatOptions.format(new Date(date)) : String();
};
