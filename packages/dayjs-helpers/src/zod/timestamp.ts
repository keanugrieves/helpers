import dayjs from "dayjs";
import { z } from "zod";

export const TimestampSchema = z
  .number()
  .refine(
    (v) => dayjs(v).isValid() && dayjs(v).year() > 1969,
    "Must be a valid timestamp"
  );
