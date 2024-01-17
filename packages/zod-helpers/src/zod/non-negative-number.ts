import { z } from "zod";

export const NonNegativeNumberSchema = z
  .number()
  .gte(0, "Must be greater than or equal to 0");
