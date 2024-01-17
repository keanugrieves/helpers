import { describe, expect, it } from "@jest/globals";
import { z } from "zod";

import { makeCoercedArraySchema } from "./make-coerced-array-schema";

describe("makeCoercedArraySchema", () => {
  it("parses a string", () => {
    const schema = makeCoercedArraySchema(z.string());

    const result = schema.parse("apples");

    expect(result).toEqual(["apples"]);
  });

  it("parses an array of strings", () => {
    const schema = makeCoercedArraySchema(z.string());

    const result = schema.parse(["bananas", "oranges"]);

    expect(result).toEqual(["bananas", "oranges"]);
  });

  it("throws error when parsing a number using a string array schema", () => {
    expect(() => {
      const schema = makeCoercedArraySchema(z.string());

      schema.parse(1);
    }).toThrow();
  });

  it("throws error when parsing an array of numbers using a string array schema", () => {
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
