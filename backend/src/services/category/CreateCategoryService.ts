import prismaClient from '../../prisma'

interface CategoryRequest{
    name: string;
}

export class CreateCategoryService{
    async execute({ name }: CategoryRequest) {

        if(name == ''){
            throw new Error('Nome inválido')
        }

        const categoryAlreadyExists = await prismaClient.category.findFirst({
            where: {
                name: name,
            },
        });

        if(categoryAlreadyExists){
            throw new Error("Categoria já cadastrada");
        }

        const category = await prismaClient.category.create({
            data: {
                name: name,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            select:{
                id: true,
                name: true,
            }
        });

        return category

    }
}
