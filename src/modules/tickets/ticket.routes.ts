import express from "express";

import ticketController from "./ticket.controller";

import authMiddleware from "../../middlewares/auth.middleware";
import validate from "../../middlewares/validate.middleware";
import { createTicketSchema } from "../../validations/ticket.validation";
import { updateTicketSchema } from "../../validations/ticket.validation";
const router = express.Router();

router.post(
  "/",
  authMiddleware,
  validate(createTicketSchema),
  ticketController.createTicket
);

router.patch(
  "/:id",
  authMiddleware,
  validate(updateTicketSchema),
  ticketController.updateTicket
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