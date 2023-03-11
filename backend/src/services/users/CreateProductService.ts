import { Product } from "@prisma/client";
import prismaClient from "../../prisma";

interface ProductDTO {
    name: string;
    price: number;
    quantity: number;
}

export class CreateProductService {
    async execute({name, price, quantity}: ProductDTO): Promise<Product> {
        // Verificar se já existe
        const productAlreadyExists = await prismaClient.product.findUnique({
            where: {
                name
            }
        });

        if (productAlreadyExists) {
            // Erro
            throw new Error("Este produto já está cadastrado.");
        }
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