import { z } from "zod";
import { categorySchema } from "../schemas";

export type TCategory = z.infer<typeof categorySchema>;
