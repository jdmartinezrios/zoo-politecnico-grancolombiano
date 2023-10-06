import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USERNAME } from "../config";

export const databaseConnection = new Sequelize({
    host: DB_HOST,
    dialect: 'mysql',
    database: DB_NAME,
    username: DB_USERNAME,
    password: DB_PASSWORD
});