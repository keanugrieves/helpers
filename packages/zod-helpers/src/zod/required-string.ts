import z from "zod";

export const RequiredStringSchema = z.string().min(1, "Required");
