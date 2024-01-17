import { z } from "zod";

export const IntegerSchema = z.number().int("Must be a valid integer");
