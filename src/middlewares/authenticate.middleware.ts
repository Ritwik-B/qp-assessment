import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "@models/user.model";

interface AuthRequest extends Request {
  user?: User; // Extend Express Request to include user
}

const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res
        .status(401)
        .send({ message: "Authentication token missing or malformed" });
      return;
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "your_jwt_secret"
    ) as { id: number };

    const user = await User.findByPk(decoded.id);
    if (!user) {
      res.status(404).send({ message: "User not found" });
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ message: "Invalid or expired token" });
  }
};

export default authenticate;
