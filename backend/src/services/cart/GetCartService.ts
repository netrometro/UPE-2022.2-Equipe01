import { Cart } from "@prisma/client";
import prismaClient from "../../prisma";

export class GetCartService {
    async execute(): Promise<Cart[]> {
        const cart = await prismaClient.cart.findMany({});

        return cart
    }
}