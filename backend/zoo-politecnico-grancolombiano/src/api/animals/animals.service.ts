import { IAnimal } from '../../shared/interfaces';
import { Animal } from '../../shared/models/animal';
import { AnimalsService } from './domain';

export class AnimalsServiceImpl extends AnimalsService {
  public async getAllAnimals(): Promise<Animal[]> {
    const animals = await Animal.findAll({
      order: [['created_at', 'DESC']],
    });
    return animals;
  }

  public async getAnimalsByUserId(userId: number): Promise<Animal[]> {
    const animals = await Animal.findAll({
      order: [['created_at', 'DESC']],
      where: { user_id: userId },
    });
    return animals;
  }

  public async createAnimal(animal: IAnimal): Promise<Animal> {
    const newAnimal = await Animal.create({ ...animal });
    return newAnimal;
  }

  public async updateAnimal(animal: IAnimal): Promise<[affectedRows: number]> {
    const affectedRows = await Animal.update({ ...animal }, { where: { id: animal.id } });
    return affectedRows;
  }

  public async deleteAnimal(animalId: number): Promise<unknown> {
    const deletedAnimal = await Animal.destroy({
      where: { id: animalId },
    });
    return deletedAnimal;
  }
}
