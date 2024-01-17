import type { Dayjs } from "dayjs";

import type { DayjsInput } from "../zod";

export type DayjsLike = Dayjs | DayjsInput;

export type NullishDayjsLike = DayjsLike | null | undefined;
