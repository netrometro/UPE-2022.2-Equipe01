import { Product } from "@prisma/client";
import prismaClient from "../../prisma";

interface UpdateProductDTO {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export class UpdateProductService {
    async execute({id, name, price, quantity}: UpdateProductDTO): Promise<Product> {
        
        // Verificar se não existe.
        const productAlreadyNotExists = await prismaClient.product.findUnique({
            where: {
                id
            }
        });
        
        var product: Product

        if (productAlreadyNotExists) {
            // Deletar o produto.
            product = await prismaClient.product.update({
                where: {
                    id
                },
                data: {
                    name,
                    price,
                    quantity
                }
            })
        } else {
            // Erro
            throw new Error("Este produto não existe.")
        }

        return product
    }
}