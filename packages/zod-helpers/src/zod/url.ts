import { z } from "zod";

export const UrlSchema = z.string().url("Must be a valid URL");
