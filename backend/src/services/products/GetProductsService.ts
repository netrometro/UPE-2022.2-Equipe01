import { Product } from "@prisma/client";
import prismaClient from "../../prisma";

export class GetProductsService {
    async execute(): Promise<Product[]> {
        const product = await prismaClient.product.findMany({});

        return product
    }
}