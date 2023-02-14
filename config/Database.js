import Sequelize from 'sequelize';
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    timestamps: false,
    dialect: process.env.BD_DIALECT,
    port: 10292,
    logging: false,
    dialectOptions: {
      requestTimeout: 30000,
      encrypt: true
    }
  });

export default sequelize;
