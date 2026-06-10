import { z } from "zod";

export const transferSchema =
  z.object({
    orderId: z.string(),

    ticketIds: z.array(
      z.string()
    ),

    firstName: z.string(),

    lastName: z.string(),

    email: z
      .email()
      .optional(),

    phone: z
      .string()
      .optional(),

    note: z.string(),
  });