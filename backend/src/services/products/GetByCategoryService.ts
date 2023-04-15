import { Product } from "@prisma/client";
import prismaClient from "../../prisma";

interface GetByCategoryServiceDTO {
    id: number;
}

export class GetByCategoryService {
    async execute({id}: GetByCategoryServiceDTO): Promise<Product[]> {
        try {
        // Verificar existe e dar GET.
        const product = await prismaClient.product.findMany({
            where: {
                category: {
                    id,
                  },
            }
        });
        return product

        } catch(err) {
            // Erro
            return(err)
        }

    }
}