import { Router } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { CreateProductController } from './controllers/user/CreateProductController'

const router = Router()

router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.post('/product', new CreateProductController().handle)

export { router }