import { Sequelize } from "sequelize";
import dbConfig from "@configs/db.config";

const sequelize = new Sequelize(
  dbConfig.name,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: "postgres",
  }
);

export default sequelize;
