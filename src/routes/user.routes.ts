import { Router } from "express";
import * as userController from "@controllers/user.controller";
import roleCheck from "@middlewares/roleCheck.middleware";

const router = Router();

router.post("/create", roleCheck(["admin"]), userController.createUser);

export default router;
