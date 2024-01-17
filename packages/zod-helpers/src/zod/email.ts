import { z } from "zod";

export const EmailSchema = z
  .string()
  .email("Must be a valid email")
  .min(3, "Must be at least 3 characters long");
