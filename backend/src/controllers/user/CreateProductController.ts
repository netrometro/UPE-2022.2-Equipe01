import { Product } from "@prisma/client";
import prismaClient from "../../prisma";
import { ProductDTO } from "../../services/users/CreateProductDTO";

export class CreateProductController {
    async execute({name, price, quantity}: ProductDTO): Promise<Product> {
        //Criar o produto.
        const product = await prismaClient.product.create({
            data: {
                name,
                price,
                quantity
            }
        });

        return product;
    }
}