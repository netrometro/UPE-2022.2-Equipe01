import { Product } from "@prisma/client";
import prismaClient from "../../prisma";

interface GetProductIdDTO {
    id: number;
}

export class GetProductIdService {
    async execute({id}: GetProductIdDTO): Promise<Product> {
        try {
        // Verificar existe e dar GET.
        const product = await prismaClient.product.findUnique({
            where: {
                id
            }
        });
        return product

        } catch(err) {
            // Erro
            return(err)
        }

    }
}