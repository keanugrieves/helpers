import { createRegExp, digit, oneOrMore, type MagicRegExp } from "magic-regexp";
import { z } from "zod";

export const numericStringRegex: MagicRegExp<"/\\d+/", never, [], never> =
  createRegExp(oneOrMore(digit));

export const NumericStringSchema = z.string().regex(numericStringRegex);
