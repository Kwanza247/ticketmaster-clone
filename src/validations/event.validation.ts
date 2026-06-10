import { z } from "zod";

export const createEventSchema = z.object({
  title: z.string().min(3),

  date: z.string(),

  time: z.string(),

  venue: z.string(),

  city: z.string(),

  state: z.string(),
});

export const updateEventSchema =
  createEventSchema.partial();