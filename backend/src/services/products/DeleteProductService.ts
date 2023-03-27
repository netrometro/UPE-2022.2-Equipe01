import { Product } from "@prisma/client";
import prismaClient from "../../prisma";

interface DeleteProductDTO {
    id: number;
}

export class DeleteProductService {
    async execute({id}: DeleteProductDTO): Promise<Product> {
        
        // Verificar se não existe.
        const productAlreadyNotExists = await prismaClient.product.findUnique({
            where: {
                id
            }
        });
        
        var product: Product

        if (productAlreadyNotExists) {
            // Deletar o produto.
            product = await prismaClient.product.delete({
                where: {
                    id
                }
            })
        } else {
            // Erro
            throw new Error("Este produto não existe.")
        }

        return product
    }
}








// interface ProductDTO {
//     id: number;
// }

// import { Product } from "@prisma/client";
// import prismaClient from "../../prisma";

// export class DeleteProductService {
//     async execute({id}: ProductDTO): Promise<Product> {
//         try {
//             const product = await prismaClient.product.delete({
//                 where: {
//                     id
//                 }
//             });
//             return product;
//         } catch(err) {
//             // throw new Error('deu erro aquidddd')
//             console.log(err)
//         }
//         }
        
// }