
import express from "express";

import userController from "./user.controller";

import authMiddleware from "../../middlewares/auth.middleware";

import roleMiddleware from "../../middlewares/role.middleware";
import validate from "../../middlewares/validate.middleware";
import { createUserSchema } from "../../validations/auth.validation";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  validate(createUserSchema),
  userController.createUser
);

export default router;