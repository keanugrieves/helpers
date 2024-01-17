import { customAlphabet } from "nanoid";
import { numbers } from "nanoid-dictionary";

export const makeNumericId = (length: number) => {
  const prefix = String(new Date().getTime());

  const suffix = customAlphabet(numbers, length - prefix.length)();

  return `${prefix}${suffix}`;
};
