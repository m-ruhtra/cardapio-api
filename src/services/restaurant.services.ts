import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/AppError";
import { TLoginRestaurant, TRegisterRestaurant, TReturnRestaurant } from "../interfaces";
import { restaurantReturnSchema } from "../schemas";
import { TLoginReturnRestaurant, TUpdateRestaurant } from "../interfaces/restaurant.interface";

export class RestaurantServices {
    async register(body: TRegisterRestaurant): Promise<TReturnRestaurant> {
        const existingRestaurant = await prisma.restaurant.findFirst({
            where: {email: body.email},
        });

        if(!existingRestaurant){
            throw new AppError(401, "This email is already registered.")
        };

        const hashPassword = await bcrypt.hash(body.password, 10);

        const newRestaurantData = { ...body, password: hashPassword };

        const restaurant = await prisma.restaurant.create({ data: newRestaurantData });

        return restaurantReturnSchema.parse(restaurant);
    };

    async login(body: TLoginRestaurant): Promise<TLoginReturnRestaurant> {
        const restaurant = await prisma.restaurant.findFirst({
            where: {email: body.email},
        });

        if(!restaurant){
            throw new AppError(404, "Restaurant not registered");
        };

        const comparePassword = await bcrypt.compare(body.password, restaurant.password);

        if(!comparePassword){
            throw new AppError(401, "Email and password doesn't match.");
        };

        const token = jwt.sign({ id: restaurant.id }, process.env.JWT_SECRET as string);

        return{
            accessToken: token,
            restaurant: restaurantReturnSchema.parse(restaurant)
        };
    };

    async update(body: TUpdateRestaurant, restaurantId: string): Promise<TReturnRestaurant>{
        const restaurant = await prisma.restaurant.update({
            where: { id: restaurantId},
            data: body,
        });

        return restaurantReturnSchema.parse(restaurant);
    };

    async getRestaurant(restaurantId: string): Promise<TReturnRestaurant> {
        const restaurant = await prisma.restaurant.findFirst({
            where: { id: restaurantId },
        });

        return restaurantReturnSchema.parse(restaurant);
    };
}
