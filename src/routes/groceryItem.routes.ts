import express from "express";
import {
  listGroceryItems,
  updateGroceryItem,
  deleteGroceryItem,
  addGroceryItem,
} from "@controllers/groceryItem.controller";
import roleCheck from "@middlewares/roleCheck.middleware";

const router = express.Router();

router.get("/grocery-items", listGroceryItems);
router.put("/grocery-items/:id", roleCheck(["admin"]), updateGroceryItem);
router.delete("/grocery-items/:id", roleCheck(["admin"]), deleteGroceryItem);
router.post("/grocery-items", roleCheck(["admin"]), addGroceryItem);

export default router;
