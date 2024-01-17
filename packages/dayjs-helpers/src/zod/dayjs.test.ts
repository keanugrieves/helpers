import { describe, expect, it } from "@jest/globals";
import dayjs from "dayjs";

import { DayjsSchema } from "./dayjs";

describe("DatetimeSchema", () => {
  it("parses Dayjs instances", () => {
    const DayjsInstance = dayjs();

    const result = DayjsSchema.parse(DayjsInstance);

    expect(result).toBeInstanceOf(dayjs);
  });

  it("throws on others", () => {
    expect(() => {
      DayjsSchema.parse("apples");
    }).toThrow();
  });
});
