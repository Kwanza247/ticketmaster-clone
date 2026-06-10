import { z } from "zod";

export const createTicketSchema =
  z.object({
    eventId: z.string(),

    ticketCount: z.number().min(1),

    firstName: z.string(),

    lastName: z.string(),

    email: z.email(),

    phoneNumber: z.string(),

    ticketType: z.string(),

    section: z.string(),

    row: z.string(),

    startingSeat: z.string(),

    seatLocation: z.string(),
  });