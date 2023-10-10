import { IAnimal } from '../animal';
import { IUser } from '../user';

export interface IReport {
  id: number;
  user: IUser;
  animal: IAnimal;
  createdAt: Date;
  updatedAt: Date;
}

export interface IReportInputs {
  animal_id: number;
  user_id: number;
}
