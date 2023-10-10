import { IAnimal } from '../../../../../shared/models/animal';

export const transformAnimals = (animals: IAnimal[]) => {
  return animals?.map((animal) => {
    return { key: animal.id, ...animal } as DataTable;
  });
};

export type DataTable = { key: React.Key } & IAnimal;
