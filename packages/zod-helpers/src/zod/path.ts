import { z } from "zod";

export const PathSchema = z
  .string()
  .startsWith("/", `Must start with "/"`)
  .refine((v) => !v.startsWith("//"), `Must not start with "//"`);
