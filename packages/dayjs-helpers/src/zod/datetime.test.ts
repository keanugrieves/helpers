import { describe, expect, it } from "@jest/globals";
import dayjs from "dayjs";

import { DatetimeSchema } from "./datetime";

describe("DatetimeSchema", () => {
  it("parses ISO strings", () => {
    const datetime = dayjs().toISOString();

    const result = DatetimeSchema.parse(datetime);

    expect(result).toBe(datetime);
  });

  it("parses dayjs string", () => {
    const dayjsString = dayjs().toString();

    const result = DatetimeSchema.parse(dayjsString);

    expect(result).toBe(dayjsString);
  });

  it("throws on others", () => {
    expect(() => {
      DatetimeSchema.parse("apples");
    }).toThrow();
  });
});
