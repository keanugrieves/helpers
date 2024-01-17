import dayjs from "dayjs";

import { DayjsInput } from "../zod";
import { _sortDates } from "./sort-dates";

export const _calcFirstDate =
  (_dayjs: typeof dayjs) => (values: (DayjsInput | null | undefined)[]) =>
    _sortDates(_dayjs)(values)[0];
