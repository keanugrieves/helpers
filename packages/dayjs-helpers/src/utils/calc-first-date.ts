import dayjs from "dayjs";

import type { NullishDayjsLike } from "../types";
import { _sortDates } from "./sort-dates";

export const _calcFirstDate =
  (_dayjs: typeof dayjs) => (values: NullishDayjsLike[]) =>
    _sortDates(_dayjs)(values)[0];
