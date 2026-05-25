import express from "express";

import eventController from "./event.controller";

import authMiddleware from "../../middlewares/auth.middleware";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  eventController.createEvent
);

router.get(
  "/my-events",
  authMiddleware,
  eventController.getMyEvents
);

router.get(
  "/:id",
  authMiddleware,
  eventController.getSingleEvent
);

router.patch(
  "/:id",
  authMiddleware,
  eventController.updateEvent
);

router.delete(
  "/:id",
  authMiddleware,
  eventController.deleteEvent
);

export default router;