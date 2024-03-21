import { z } from "zod";
import { restaurantSchema } from "../schemas";

export type TRestaurant = z.infer<typeof restaurantSchema>;
