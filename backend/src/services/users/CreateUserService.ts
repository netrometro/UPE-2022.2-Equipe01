import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';
import { RoleEnum } from '../../enums/RoleEnum';
import { mapRoleEnum } from '../../utils/mapRoleEnum'

interface UserRequest {
    name: string;
    email: string;
    password: string;
    roleEnum?: RoleEnum;
}

export class CreateUserService {
    async execute({ name, email, password, roleEnum }: UserRequest) {
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

        if (roleEnum) {
            const mappedRole = mapRoleEnum(roleEnum);

            const roleExists = await prismaClient.role.findFirst({
                where: {
                    name: mappedRole,
                },
            });

            if (roleExists) {
                userRole = {
                    connect: {
                        id: roleExists.id,
                    },
                };
            } else {
                userRole =  mappedRole
            }
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
                role: userRole,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            select:{
                id: true,
                name: true,
                email: true,
                role: true,
            }
        });

        return user;
    }
}
