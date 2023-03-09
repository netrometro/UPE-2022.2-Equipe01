import prismaClient from '../../prisma'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

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
      },
      process.env.JWT_SECRET!,
      {
        subject: user.id.toString(),
        expiresIn: '1d',
      }
    );

    return {
      token: token,
    };
  }

  async generateToken(userEmail: string, userId: number): Promise<string> {
    const token = sign(
      {
        email: userEmail,
      },
      process.env.JWT_SECRET!,
      {
        subject: userId.toString(),
        expiresIn: '1d',
      }
    );

    return token;
  }
}

export { AuthUserService };
