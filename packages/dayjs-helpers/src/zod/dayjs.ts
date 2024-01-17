import dayjs from "dayjs";
import { z } from "zod";

export const DayjsSchema = z.instanceof(dayjs.Dayjs);
