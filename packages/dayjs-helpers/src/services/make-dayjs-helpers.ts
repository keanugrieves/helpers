import type dayjs from "dayjs";

import { _calcFirstDate, _calcLastDate, _sortDates } from "../utils";

export const makeDayjsHelpers = (_dayjs: typeof dayjs) => {
  const calcFirstDate = _calcFirstDate(_dayjs);

  const calcLastDate = _calcLastDate(_dayjs);

  const sortDates = _sortDates(_dayjs);

  return {
    calcFirstDate,
    calcLastDate,
    sortDates,
  };
};
