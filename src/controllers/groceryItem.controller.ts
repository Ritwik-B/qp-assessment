import { Request, Response } from "express";
import GroceryItem from "@models/groceryItem.model";

export const listGroceryItems = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const groceryItems = await GroceryItem.findAll();
    res.status(200).json(groceryItems);
  } catch (error: any) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateGroceryItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, price, inventory } = req.body;

    const groceryItem = await GroceryItem.findByPk(id);

    if (!groceryItem) {
      res.status(404).json({ message: "Grocery item not found" });
      return;
    }

    groceryItem.name = name || groceryItem.name;
    groceryItem.price = price || groceryItem.price;
    groceryItem.inventory = inventory || groceryItem.inventory;

    await groceryItem.save();

    res.status(200).json(groceryItem);
  } catch (error: any) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteGroceryItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const groceryItem = await GroceryItem.findByPk(id);

    if (!groceryItem) {
      res.status(404).json({ message: "Grocery item not found" });
      return;
    }

    await groceryItem.destroy();

    res.status(200).json({ message: "Grocery item deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const addGroceryItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, price, inventory } = req.body;

    const newGroceryItem = await GroceryItem.create({ name, price, inventory });

    res.status(201).json(newGroceryItem);
  } catch (error: any) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
