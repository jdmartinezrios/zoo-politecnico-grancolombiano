import { Sequelize } from 'sequelize';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USERNAME, DB_URL } from '../config';

export const databaseConnection = DB_URL
  ? new Sequelize(DB_URL)
  : new Sequelize({
      host: DB_HOST,
      dialect: 'mysql',
      database: DB_NAME,
      username: DB_USERNAME,
      password: DB_PASSWORD,
    });
