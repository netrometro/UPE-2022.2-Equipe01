import { Router } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { CreateProductController } from './controllers/user/CreateProductController'
import { GetProductController } from './controllers/user/GetProductController'
import { DeleteProductController } from './controllers/user/DeleteProductController'

const router = Router()

// Users
router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)

// Products
router.post('/product', new CreateProductController().handle)
router.get("/getproducts", new GetProductController().handle)
router.delete("/deleteproduct", new DeleteProductController().handle)

export { router }