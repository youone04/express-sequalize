import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import UserModels from "./UserModels.js";

const dbs = {};
dbs.Sequelize = Sequelize;
dbs.db = db;

dbs.user = UserModels(db , Sequelize);

export default dbs;
