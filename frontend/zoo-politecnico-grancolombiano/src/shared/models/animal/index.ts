export interface IAnimal {
  id: number;
  name: string;
  specie: string;
  user_id: number;
  habitat: string;
  food_type: string;
  weight: string;
  vaccines: string;
  allergies: string;
  medicines: string;
  animal_grooming_needs: string;
  habitat_grooming_needs: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAnimalInputs {
  name: string;
  specie: string;
  user_id: number;
  habitat: string;
  food_type: string;
  weight: string;
  vaccines: string;
  allergies: string;
  medicines: string;
  animal_grooming_needs: string;
  habitat_grooming_needs: string;
}
