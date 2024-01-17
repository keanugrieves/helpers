import type dayjs from "dayjs";

import type { NullishDayjsLike } from "../types";

export type SortDatesOptions = {
  direction?: "asc" | "desc";
};

export const _sortDates =
  (_dayjs: typeof dayjs) =>
  (values: NullishDayjsLike[], { direction = "asc" }: SortDatesOptions = {}) =>
    values
      .flatMap((v) => (v && _dayjs(v).isValid() ? v : []))
      .map((v) => _dayjs(v))
      .sort((a, b) =>
        a.toISOString() > b.toISOString()
          ? direction === "asc"
            ? -1
            : 1
          : direction === "asc"
            ? 1
            : -1
      );
