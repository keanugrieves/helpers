import { describe, expect, it } from "@jest/globals";
import dayjs from "dayjs";

import { DayjsInputSchema } from "./dayjs-input";

describe("DayjsInputSchema", () => {
  it("parses dates", () => {
    const input = new Date();

    const result = DayjsInputSchema.parse(input);

    expect(result).toBeInstanceOf(Date);
  });

  it("parses datetimes", () => {
    const input = dayjs().toISOString();

    const result = DayjsInputSchema.parse(input);

    expect(result).toBe(input);
  });

  it("parses UNIX timestamps", () => {
    const input = dayjs().unix();

    const result = DayjsInputSchema.parse(input);

    expect(result).toBe(input);
  });

  it("parses 1000000000", () => {
    const input = 1000000000;

    const result = DayjsInputSchema.parse(input);

    expect(result).toBe(input);
  });

  it("throws on others", () => {
    expect(() => {
      DayjsInputSchema.parse("apples");
    }).toThrow();
  });
});
