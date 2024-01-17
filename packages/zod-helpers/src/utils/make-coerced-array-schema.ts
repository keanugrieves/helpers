import z from "zod";

export const makeCoercedArraySchema = <TSchema extends z.ZodTypeAny>(
  schema: TSchema
) => z.preprocess((v) => (Array.isArray(v) ? v : [v]), z.array(schema));
