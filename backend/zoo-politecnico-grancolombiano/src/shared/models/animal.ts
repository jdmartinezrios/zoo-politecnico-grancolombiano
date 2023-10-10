import { DataTypes, Model } from 'sequelize';
import { databaseConnection } from '../../connections/database';
import { User } from './user';

export class Animal extends Model {
  declare id: number;
  declare name: string;
  declare specie: string;
  declare user_id: number;
  declare habitat: string;
  declare food_type: string;
  declare weight: string;
  declare vaccines: string;
  declare allergies: string;
  declare medicines: string;
  declare animal_grooming_needs: string;
  declare habitat_grooming_needs: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Animal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    specie: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        key: 'id',
        model: User,
      },
    },
    habitat: {
      type: DataTypes.STRING,
    },
    food_type: {
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.STRING,
    },
    vaccines: {
      type: DataTypes.STRING,
    },
    allergies: {
      type: DataTypes.STRING,
    },
    medicines: {
      type: DataTypes.STRING,
    },
    animal_grooming_needs: {
      type: DataTypes.STRING,
    },
    habitat_grooming_needs: {
      type: DataTypes.STRING,
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
    },
  },
  { sequelize: databaseConnection },
);
