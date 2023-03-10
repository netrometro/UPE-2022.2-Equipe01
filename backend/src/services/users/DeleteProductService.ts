import { Product } from "@prisma/client";
import prismaClient from "../../prisma";

interface DeleteProductDTO {
    name: string;
}

export class DeleteProductService {
    async execute({name}): Promise<Product> {
        // Verificar se não existe.
        const productAlreadyNotExists = await prismaClient.product.findUnique({
            where: {
                name
            }
        });
        
        var product: Product

        if (productAlreadyNotExists) {
            // Deletar o produto.
            product = await prismaClient.product.delete({
                where: {
                    name
                }
            })
        } else {
            // Erro
            throw new Error("Este produto não existe.")
        }

        return product
    }
}