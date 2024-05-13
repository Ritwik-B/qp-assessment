import { Request, Response, NextFunction } from "express";
import User from "@models/user.model";

interface AuthRequest extends Request {
  user?: User; // Extend Express Request to include user
}

const roleCheck = (requiredRoles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    const user = req.user as User; // Assumes req.user is populated by authentication middleware

    if (user && requiredRoles.includes(user.role)) {
      next();
    } else {
      res
        .status(403)
        .json({ message: "Access denied - insufficient privileges" });
    }
  };
};

export default roleCheck;
