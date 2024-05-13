import { Model, DataTypes } from "sequelize";
import dbConnector from "@database/postgres.database";
import Order from "@models/order.model";
import GroceryItem from "@models/groceryItem.model";

interface OrderItemAttributes {
  id?: number; // Make `id` optional as it's auto-generated
  orderId: number;
  groceryItemId: number;
  quantity: number;
  price: number;
}

class OrderItem
  extends Model<OrderItemAttributes>
  implements OrderItemAttributes
{
  public id!: number;
  public orderId!: number;
  public groceryItemId!: number;
  public quantity!: number;
  public price!: number;
}

OrderItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Order,
        key: "id",
      },
    },
    groceryItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: GroceryItem,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "order_items",
    sequelize: dbConnector,
  }
);

OrderItem.belongsTo(Order, { foreignKey: "orderId" });
OrderItem.belongsTo(GroceryItem, { foreignKey: "groceryItemId" });

export default OrderItem;
