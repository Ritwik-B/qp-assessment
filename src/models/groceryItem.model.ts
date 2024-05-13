import { Model, DataTypes } from "sequelize";
import dbConnector from "@database/postgres.database";

interface GroceryItemAttributes {
  id?: number; // Make `id` optional as it's auto-generated
  name: string;
  price: number;
  inventory: number;
}

class GroceryItem
  extends Model<GroceryItemAttributes>
  implements GroceryItemAttributes
{
  public id!: number;
  public name!: string;
  public price!: number;
  public inventory!: number;
}

GroceryItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    inventory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "grocery_items",
    sequelize: dbConnector,
  }
);

export default GroceryItem;
