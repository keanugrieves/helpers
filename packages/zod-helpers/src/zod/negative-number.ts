import { z } from "zod";

export const NegativeNumberSchema = z.number().lt(0, "Must be less than 0");
