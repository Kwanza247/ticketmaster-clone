import express from "express";

import authMiddleware from "../../middlewares/auth.middleware";

import transferController from "./transfer.controller";
import validate from "../../middlewares/validate.middleware";
import { transferSchema } from "../../validations/transfer.validation";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  validate(transferSchema),
  transferController.transferTickets
);

export default router;