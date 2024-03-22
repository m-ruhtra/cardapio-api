import { z } from "zod";
import {
    restaurantSchema,
    restaurantRegisterBodySchema,
    restaurantLoginBodySchema,
    restaurantReturnSchema,
    restaurantUpdateBodySchema
} from "../schemas";

export type TRestaurant = z.infer<typeof restaurantSchema>;

export type TRegisterRestaurant = z.infer<typeof restaurantRegisterBodySchema>;

export type TLoginRestaurant = z.infer<typeof restaurantLoginBodySchema>;

export type TUpdateRestaurant = z.infer<typeof restaurantUpdateBodySchema>;

export type TReturnRestaurant = z.infer<typeof restaurantReturnSchema>;

export type TLoginReturnRestaurant = {
    accessToken: string,
    restaurant: TReturnRestaurant
};

