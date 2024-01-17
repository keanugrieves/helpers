import { z } from "zod";

import { NonNegativeNumberSchema } from "./non-negative-number";
import { PositiveNumberSchema } from "./positive-number";

export const NonZeroNumberSchema = z.union([
  NonNegativeNumberSchema,
  PositiveNumberSchema,
]);
