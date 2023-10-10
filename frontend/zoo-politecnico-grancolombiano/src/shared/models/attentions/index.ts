import { IAnimal } from '../animal';
import { IUser } from '../user';

export interface IAttention {
  id: number;
  user: IUser;
  animal: IAnimal;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAttentionInputs {
  animal_id: number;
  user_id: number;
  description: string;
}
