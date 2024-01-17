import dayjs from "dayjs";
import { z } from "zod";

export const TimestampSchema = z
  .number()
  .min(1000000000, "Must be greater than 1,000,000,000")
  .refine((v) => dayjs(v).isValid(), "Must be a valid timestamp");
