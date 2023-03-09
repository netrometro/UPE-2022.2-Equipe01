import { Product } from "@prisma/client";
import prismaClient from "../../prisma";
import { ProductDTO } from "./CreateProductDTO";

export class CreateProductServices {
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