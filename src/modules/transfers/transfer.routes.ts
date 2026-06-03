import express from "express";

import authMiddleware from "../../middlewares/auth.middleware";

import transferController from "./transfer.controller";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  transferController.transferTickets
);

export default router;