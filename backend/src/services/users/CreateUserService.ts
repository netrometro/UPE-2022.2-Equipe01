import prismaClient from '../../prisma'

interface UserRequest {
    name:     string;
    email:    string;
    password: string;
    role?:    string;
}

export class CreateUserService {
    async execute({ name, email, password, role }: UserRequest) {
        if (!email) {
            throw new Error("E-mail inválido");
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email,
            },
        });

        if (userAlreadyExists) {
            throw new Error("E-mail já cadastrado");
        }

        let userRole;

        if (role) {
            const roleExists = await prismaClient.role.findFirst({
                where: {
                    name: role,
                },
            });

            if (roleExists) {
                userRole = {
                    connect: {
                        id: roleExists.id,
                    },
                };
            } else {
                userRole = {
                    create: {
                        name: role,
                    },
                };
            }
        }

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: password,
                role: userRole,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });

        return user;
    }
}
