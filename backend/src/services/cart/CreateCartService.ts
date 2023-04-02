import { Cart } from "@prisma/client";
import prismaClient from "../../prisma";

interface CartDTO {
    productId: number;
    price: number;
    quantity: number;
}

export class CreateCartService {
    async execute({productId, price, quantity}: CartDTO): Promise<Cart> {
            //Criar o carrinho.
            const cart = prismaClient.cart.create({
                data: {
                    productId,
                    price,
                    quantity
                }
            });
    
            return cart;
    }
}