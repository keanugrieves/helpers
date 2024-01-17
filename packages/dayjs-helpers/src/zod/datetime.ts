import { RequiredStringSchema } from "@keanugrieves/zod-helpers";
import dayjs from "dayjs";

export const DatetimeSchema = RequiredStringSchema.refine(
  (v) => dayjs(v).isValid(),
  "Must be a valid datetime"
);
