import { z } from "zod";

import { NegativeIntegerSchema } from "./negative-integer";
import { PositiveIntegerSchema } from "./positive-integer";

export const NonZeroIntegerSchema = z.union([
  NegativeIntegerSchema,
  PositiveIntegerSchema,
]);
