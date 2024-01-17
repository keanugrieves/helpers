import { z } from "zod";

export const NodeEnvSchema = z.enum(["development", "production", "test"]);

export type NodeEnv = z.infer<typeof NodeEnvSchema>;
