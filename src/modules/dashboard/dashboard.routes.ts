import express from "express";

import authMiddleware from "../../middlewares/auth.middleware";

import dashboardController from "./dashboard.controller";

const router = express.Router();

router.get(
  "/my-events",
  authMiddleware,
  dashboardController.getMyEvents
);

export default router;