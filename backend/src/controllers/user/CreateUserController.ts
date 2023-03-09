import { Request, Response } from 'express'
import { CreateUserService } from '../../services/users/CreateUserService'
import { mapRoleEnum } from '../../utils/mapRoleEnum'

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password, roleEnum } = req.body

        try {
            const mappedRole = mapRoleEnum(roleEnum);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }

        const createUserService = new CreateUserService()

        const user = await createUserService.execute({
            name,
            email,
            password,
            roleEnum: mapRoleEnum(roleEnum)
        })

        return res.json(user)

  }
}

export { CreateUserController }
