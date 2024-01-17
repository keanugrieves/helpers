import { IntegerSchema } from "./integer";

export const PositiveIntegerSchema = IntegerSchema.gt(
  0,
  "Must be greater than 0"
);
