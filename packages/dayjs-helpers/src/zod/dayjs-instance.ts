import dayjs from "dayjs";
import { z } from "zod";

export const DayjsInstanceSchema = z
  .any()
  .refine((v) => dayjs(v).isValid())
  .transform((v) => dayjs(v));
