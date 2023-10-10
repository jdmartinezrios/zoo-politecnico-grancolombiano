import { DataTypes, Model } from 'sequelize';
import { databaseConnection } from '../../connections/database';
import { Animal } from './animal';
import { User } from './user';

export class Report extends Model {
  declare id: number;
  declare animal_id: number;
  declare user_id: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Report.init(
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
    updatedAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
    createdAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
    },
  },
  { sequelize: databaseConnection },
);

Report.belongsTo(User, { as: 'user', foreignKey: 'user_id' });
Report.belongsTo(Animal, { as: 'animal', foreignKey: 'animal_id' });
