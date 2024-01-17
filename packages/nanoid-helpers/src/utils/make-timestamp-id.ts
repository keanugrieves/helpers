import { PositiveIntegerSchema } from "@keanugrieves/zod-helpers";
import type { Simplify } from "type-fest";
import { z } from "zod";

import { makeNumericId } from "./make-numeric-id";

const MakeTimestampIdOptionsSchema = z.object({
  length: PositiveIntegerSchema.optional(),
});

type MakeTimestampIdOptions = Simplify<
  z.infer<typeof MakeTimestampIdOptionsSchema>
>;

export const makeTimestampId = z
  .function()
  .args(MakeTimestampIdOptionsSchema.optional())
  .implement(({ length = 16 }: MakeTimestampIdOptions = {}) => {
    const prefix = String(new Date().getTime());

    const suffixLength = Math.max(length - prefix.length, 0);

    const suffix = suffixLength > 0 ? makeNumericId(suffixLength) : "";

    return `${prefix}${suffix}`;
  });
