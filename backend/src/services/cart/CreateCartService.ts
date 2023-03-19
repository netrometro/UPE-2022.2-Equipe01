import { Cart } from "@prisma/client";
import prismaClient from "../../prisma";

interface CartDTO {
    productId: number;
}

export class CreateCartService {
    async execute({productId}: CartDTO): Promise<Cart> {
            //Criar o carrinho.
            const cart = prismaClient.cart.create({
                data: {
                    productId
                }
            });
    
            return cart;
    }
}