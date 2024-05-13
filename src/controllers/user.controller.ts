import { Request, Response } from "express";
import User from "@models/user.model";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      res.status(409).json({ message: "Email already in use" });
      return;
    }

    const newUser = await User.create({ name, email, password, role });
    const { id } = newUser;
    res.status(201).json({ id, name, email, role });
  } catch (error: any) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
