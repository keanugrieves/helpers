import { IntegerSchema } from "./integer";

export const NonNegativeIntegerSchema = IntegerSchema.gte(
  0,
  "Must be greater than or equal to 0"
);
