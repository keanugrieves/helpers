import { describe, expect, it } from "@jest/globals";
import { z } from "zod";

import { makeCoercedArraySchema } from "./make-coerced-array-schema";

describe("makeCoercedArraySchema", () => {
  it("parses string to array of strings", () => {
    const schema = makeCoercedArraySchema(z.string());

    const result = schema.parse("apples");

    expect(result).toEqual(["apples"]);
  });

  it("parses array of strings to array of strings", () => {
    const schema = makeCoercedArraySchema(z.string());

    const result = schema.parse(["bananas", "oranges"]);

    expect(result).toEqual(["bananas", "oranges"]);
  });

  it("throws error when parsing number to array of strings", () => {
    expect(() => {
      const schema = makeCoercedArraySchema(z.string());

      schema.parse(1);
    }).toThrow();
  });

  it("throws error when parsing array of numbers to array of strings", () => {
    expect(() => {
      const schema = makeCoercedArraySchema(z.string());

      schema.parse([2, 3]);
    }).toThrow();
  });

  it("parses null with nullable schema", () => {
    const schema = makeCoercedArraySchema(z.string()).nullable();

    const result = schema.parse(null);

    expect(result).toBeNull();
  });

  it("parses undefined with nullish schema", () => {
    const schema = makeCoercedArraySchema(z.string()).nullish();

    const result = schema.parse(undefined);

    expect(result).toBeUndefined();
  });
});
