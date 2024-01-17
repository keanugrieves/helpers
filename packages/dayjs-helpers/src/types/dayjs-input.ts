import type { Dayjs } from "dayjs";

export type DayjsLike = Dayjs | Date | number | string;

export type NullishDayjsLike = DayjsLike | null | undefined;
