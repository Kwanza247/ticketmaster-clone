import express from "express";

import ticketController from "./ticket.controller";

import authMiddleware from "../../middlewares/auth.middleware";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  ticketController.createTicket
);

router.get(
  "/my-tickets",
  authMiddleware,
  ticketController.getMyTickets
);

router.get(
  "/:id",
  authMiddleware,
  ticketController.getSingleTicket
);

router.patch(
  "/:id",
  authMiddleware,
  ticketController.updateTicket
);

router.delete(
  "/:id",
  authMiddleware,
  ticketController.deleteTicket
);

export default router;