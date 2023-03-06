import { Router } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { ProductServices } from './services/users/CreateProductServices'

const router = Router()

router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.post('/product', new ProductServices().handle)

export { router }