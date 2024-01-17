import { z } from "zod";

import { DatetimeSchema } from "./datetime";
import { TimestampSchema } from "./timestamp";

export const DayjsInputSchema = z.union([
  z.date(),
  DatetimeSchema,
  TimestampSchema,
]);

/* export type DayjsInput = z.infer<typeof DayjsInputSchema>; */
