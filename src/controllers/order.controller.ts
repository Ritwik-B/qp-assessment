import { Request, Response } from "express";
import Order from "@models/order.model";
import OrderItem from "@models/orderItem.model";
import GroceryItem from "@models/groceryItem.model";
import User from "@models/user.model";

export const createOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, items } = req.body;

    // Calculate total price and update inventory
    let totalPrice = 0;
    for (const item of items) {
      const groceryItem = await GroceryItem.findByPk(item.groceryItemId);
      if (!groceryItem) {
        res.status(404).json({
          message: `Grocery item with id ${item.groceryItemId} not found`,
        });
        return;
      }
      if (groceryItem.inventory < item.quantity) {
        res
          .status(400)
          .json({ message: `Not enough inventory for ${groceryItem.name}` });
        return;
      }
      totalPrice += groceryItem.price * item.quantity;
    }

    // Create order
    const newOrder = await Order.create({ userId, totalPrice });

    // Create order items and update inventory
    for (const item of items) {
      const groceryItem = await GroceryItem.findByPk(item.groceryItemId);

      await OrderItem.create({
        orderId: newOrder.id,
        groceryItemId: item.groceryItemId,
        quantity: item.quantity,
        price: groceryItem!.price * item.quantity,
      });

      // Update inventory
      groceryItem!.inventory -= item.quantity;
      await groceryItem!.save();
    }

    res.status(201).json({ orderId: newOrder.id, totalPrice, items });
  } catch (error: any) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
