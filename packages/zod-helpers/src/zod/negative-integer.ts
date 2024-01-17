import { IntegerSchema } from "./integer";

export const NegativeIntegerSchema = IntegerSchema.lt(0, "Must be less than 0");
