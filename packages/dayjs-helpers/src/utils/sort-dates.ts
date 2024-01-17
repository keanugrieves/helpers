import type dayjs from "dayjs";

import type { NullishDayjsLike } from "../types";

export const _sortDates =
  (_dayjs: typeof dayjs) => (values: NullishDayjsLike[]) =>
    values
      .flatMap((v) => (v && _dayjs(v).isValid() ? v : []))
      .sort((a, b) =>
        _dayjs(a).toISOString() > _dayjs(b).toISOString() ? -1 : 1
      );
