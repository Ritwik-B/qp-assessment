import { Model, DataTypes } from "sequelize";
import dbConnector from "@database/postgres.database";
import User from "@models/user.model";

interface OrderAttributes {
  id?: number; // Make `id` optional as it's auto-generated
  userId: number;
  totalPrice: number;
}

class Order extends Model<OrderAttributes> implements OrderAttributes {
  public id!: number;
  public userId!: number;
  public totalPrice!: number;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "orders",
    sequelize: dbConnector,
  }
);

Order.belongsTo(User, { foreignKey: "userId" });

export default Order;
