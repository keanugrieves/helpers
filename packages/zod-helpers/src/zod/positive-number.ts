import { z } from "zod";

export const PositiveNumberSchema = z.number().gt(0, "Must be greater than 0");
