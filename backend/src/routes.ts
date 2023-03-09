import { Router } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'

const router = Router()

router.post('/api/users', new CreateUserController().handle)
router.post('/api/login', new AuthUserController().handle)

export { router }