import prismaClient from '../../prisma'
import { compare } from 'bcryptjs'
import { JwtPayload, sign, verify } from 'jsonwebtoken'

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error('Usuário ou senha inválida');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Usuário ou senha inválida');
    }

    const token = sign(
      {
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET!,
      {
        subject: user.id.toString(),
        expiresIn: '30d',
      }
    )

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: token,
    }
  }

  async decryptToken(token: string){
    const user = verify(token, process.env.JWT_SECRET) as JwtPayload

    return user;
  }
}

export { AuthUserService };
