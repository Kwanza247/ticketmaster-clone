import express from "express";

import authMiddleware from "../../middlewares/auth.middleware";

import orderController from "./order.controller";

const router = express.Router();

router.get(
  "/:id",
  authMiddleware,
  orderController.getOrderDetails
);

export default router;