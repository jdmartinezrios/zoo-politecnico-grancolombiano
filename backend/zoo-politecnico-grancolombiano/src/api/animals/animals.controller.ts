import { Router, Request, Response } from 'express';
import { AnimalsServiceImpl } from './animals.service';
import { AnimalsService } from './domain';
import { ResponsetError } from '../../shared/response.error';
import { HTTP_STATUS } from '../../shared/constants';
import { IAnimal } from '../../shared/interfaces';

export class AnimalsController {
  private static animalsService: AnimalsService = new AnimalsServiceImpl();

  public static route(router: Router): Router {
    router.get('/animals', this.getAllAnimals.bind(this));
    router.get('/animals/user/:user_id', this.getAnimalsByUserId.bind(this));
    router.post('/animals', this.createAnimal.bind(this));
    router.put('/animals', this.updateAnimal.bind(this));
    router.delete('/animals/:id', this.deleteAnimal.bind(this));
    return router;
  }

  private static async getAllAnimals(_req: Request, res: Response): Promise<void> {
    try {
      const animals = await this.animalsService.getAllAnimals();
      res.json(animals);
    } catch (error) {
      const errorMessage = new ResponsetError(error, HTTP_STATUS.BAD_REQUEST);
      res.status(HTTP_STATUS.BAD_REQUEST).json(errorMessage);
    }
  }

  private static async getAnimalsByUserId(req: Request, res: Response): Promise<void> {
    try {
      const { user_id: userId } = req.params;
      const animals = await this.animalsService.getAnimalsByUserId(Number(userId));
      res.json(animals);
    } catch (error) {
      const errorMessage = new ResponsetError(error, HTTP_STATUS.BAD_REQUEST);
      res.status(HTTP_STATUS.BAD_REQUEST).json(errorMessage);
    }
  }

  private static async createAnimal(req: Request, res: Response): Promise<void> {
    try {
      const animal = await this.animalsService.createAnimal(req.body as IAnimal);
      res.json(animal);
    } catch (error) {
      const errorMessage = new ResponsetError(error, HTTP_STATUS.BAD_REQUEST);
      res.status(HTTP_STATUS.BAD_REQUEST).json(errorMessage);
    }
  }

  private static async updateAnimal(req: Request, res: Response): Promise<void> {
    try {
      const animal = await this.animalsService.updateAnimal(req.body as IAnimal);
      res.json(animal);
    } catch (error) {
      const errorMessage = new ResponsetError(error, HTTP_STATUS.BAD_REQUEST);
      res.status(HTTP_STATUS.BAD_REQUEST).json(errorMessage);
    }
  }

  private static async deleteAnimal(req: Request, res: Response): Promise<void> {
    const { id: animalId } = req.params;
    try {
      const animal = await this.animalsService.deleteAnimal(Number(animalId));
      res.json(animal);
    } catch (error) {
      const errorMessage = new ResponsetError(error, HTTP_STATUS.BAD_REQUEST);
      res.status(HTTP_STATUS.BAD_REQUEST).json(errorMessage);
    }
  }
}
