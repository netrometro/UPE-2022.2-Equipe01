import { Product } from "@prisma/client";
import prismaClient from "../../prisma";

interface ProductDTO {
    name: string;
    price: number;
    quantity: number;
    categoryId?: number
}

export class CreateProductService {
    async execute({name, price, quantity, categoryId}: ProductDTO): Promise<Product> {
        // try {
            // Verificar se já existe
            // const productAlreadyExists = await prismaClient.product.findUnique({
            //     where: {
            //         name
            //     }
            // });
    
            // if (productAlreadyExists != null) {
            //     // Erro
            //     throw new Error("Este produto já está cadastrado.");
            // }
            //Criar o produto.
            const product = await prismaClient.product.create({
                data: {
                    name,
                    price,
                    quantity,
                    categoryId,
                }
            });
    
            return product;

        // } catch(err) {
            
        //     throw new Error('deu erro aquidddd')
        // }
    }
}