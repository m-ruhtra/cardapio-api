import { z } from "zod";

export const restaurantSchema = z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    description: z.string().optional(),
    email: z.string().min(1).email(),
    password: z.string().min(3)
});

export const restaurantRegisterBodySchema = restaurantSchema.omit({ id: true, description: true });

export const restaurantLoginBodySchema = restaurantSchema.pick({ email: true, password: true });

export const restaurantUpdateBodySchema = restaurantSchema.pick({ description: true });

export const restaurantReturnSchema = restaurantSchema.omit({ password: true });
