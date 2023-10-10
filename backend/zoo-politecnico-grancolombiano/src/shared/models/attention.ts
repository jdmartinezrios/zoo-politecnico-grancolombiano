import { DataTypes, Model } from 'sequelize';
import { databaseConnection } from '../../connections/database';
import { Animal } from './animal';
import { User } from './user';

export class Attention extends Model {
  declare id: number;
  declare animal_id: number;
  declare user_id: number;
  declare description: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Attention.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    animal_id: {
      type: DataTypes.INTEGER,
      references: {
        key: 'id',
        model: Animal,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        key: 'id',
        model: User,
      },
    },
    description: {
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

Attention.belongsTo(User, { as: 'user', foreignKey: 'user_id' });
Attention.belongsTo(Animal, { as: 'animal', foreignKey: 'animal_id' });
