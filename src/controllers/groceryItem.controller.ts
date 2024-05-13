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
