import dayjs from "dayjs";

import type { NullishDayjsLike } from "../types";
import { _sortDates } from "./sort-dates";

export const _calcLastDate =
  (_dayjs: typeof dayjs) => (values: NullishDayjsLike[]) => {
    const sortedValues = _sortDates(_dayjs)(values);

    return sortedValues[sortedValues.length - 1];
  };
