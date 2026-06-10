import express from "express";
import authController from "./auth.controller";
import validate from "../../middlewares/validate.middleware";
import { loginSchema } from "../../validations/auth.validation";

const router = express.Router();

router.post(
  "/login",
  validate(loginSchema),
  authController.login
);

export default router;