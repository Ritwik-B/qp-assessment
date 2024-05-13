import express from "express";
import { listGroceryItems } from "@controllers/groceryItem.controller";

const router = express.Router();

router.get("/list", listGroceryItems);

export default router;
