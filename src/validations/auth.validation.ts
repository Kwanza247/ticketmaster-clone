import { z } from "zod";

export const loginSchema =
  z.object({
    username: z.string(),

    password: z.string().min(6),
  });

export const createUserSchema =
  z.object({
    username: z.string(),

    password: z.string().min(6),

    role: z.enum([
      "ADMIN",
      "USER",
    ]),
  });