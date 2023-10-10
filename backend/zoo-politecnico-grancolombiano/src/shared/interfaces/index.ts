export interface IUser {
  id: number;
  email: string;
  password: string;
  fullname: string;
  role: string;
}

export interface IAnimal {
  id: number;
  name: string;
  specie: string;
  user_id: number;
  habitat: string;
  food_type: string;
  weight: number;
  vaccines: string;
  allergies: string;
  medicines: string;
  animal_grooming_needs: string;
  habitat_grooming_needs: string;
}

export interface IReport {
  id: number;
  animal_id: number;
  user_id: number;
}

export interface IAttention {
  id: number;
  animal_id: number;
  user_id: number;
  description: string;
}
