import { z } from "zod";
import { recipeSchema } from "../schemas";

export type TRecipe = z.infer<typeof recipeSchema>;
