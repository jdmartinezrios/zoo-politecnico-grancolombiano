import { DataTypes, Model } from 'sequelize';
import { databaseConnection } from '../../connections/database';

export class User extends Model {
  declare id: number;
  declare email: string;
  declare password: string;
  declare role: string;
  declare fullname: string;
  declare created_at: Date;
  declare updated_at: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
    fullname: {
      type: DataTypes.STRING,
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.TIME,
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
    },
  },
  { sequelize: databaseConnection },
);
