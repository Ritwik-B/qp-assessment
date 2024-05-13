import { Model, DataTypes } from "sequelize";
import dbConnector from "@database/postgres.database";

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  role: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public role!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user",
      validate: {
        isIn: [["user", "admin"]], // Ensures the role is either 'user' or 'admin'
      },
    },
  },
  {
    tableName: "users",
    sequelize: dbConnector,
  }
);

export default User;
