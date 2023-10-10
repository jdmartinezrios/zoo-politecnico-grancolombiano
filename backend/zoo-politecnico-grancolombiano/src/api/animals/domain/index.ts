import { IAnimal } from '../../../shared/interfaces';
import { Animal } from '../../../shared/models/animal';

export abstract class AnimalsService {
  abstract getAllAnimals(): Promise<Animal[]>;
  abstract getAnimalsByUserId(userId: number): Promise<Animal[]>;
  abstract createAnimal(animal: IAnimal): Promise<Animal>;
  abstract updateAnimal(animal: IAnimal): Promise<[affectedRows: number]>;
  abstract deleteAnimal(animalId: number): Promise<unknown>;
}
