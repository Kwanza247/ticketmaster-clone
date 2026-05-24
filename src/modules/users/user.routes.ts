
import express from "express";

import userController from "./user.controller";

import authMiddleware from "../../middlewares/auth.middleware";

import roleMiddleware from "../../middlewares/role.middleware";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  userController.createUser
);

export default router;