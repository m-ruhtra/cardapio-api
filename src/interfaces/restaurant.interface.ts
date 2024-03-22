import { z } from "zod";
import {
    restaurantSchema,
    restaurantRegisterBodySchema,
    restaurantLoginBodySchema,
    returnRestaurantSchema
} from "../schemas";

export type TRestaurant = z.infer<typeof restaurantSchema>;
export type TRegisterRestaurant = z.infer<typeof restaurantRegisterBodySchema>;
export type TLoginRestaurant = z.infer<typeof restaurantLoginBodySchema>;
export type TReturnRestaurant = z.infer<typeof returnRestaurantSchema>;
