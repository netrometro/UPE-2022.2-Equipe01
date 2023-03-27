import { Request, Response } from 'express';
import { AuthUserService } from '../../services/users/AuthUserServices'

class AuthUserController {
  async handle(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const authUserService = new AuthUserService();

      const response = await authUserService.execute({
        email,
        password,
      });

      return res.json(response);
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}

export { AuthUserController };
