import { Router } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { CreateProductController } from './controllers/products/CreateProductController'
import { GetProductController } from './controllers/products/GetProductController'
import { DeleteProductController } from './controllers/products/DeleteProductController'

const router = Router()

// Users
router.post('/api/users', new CreateUserController().handle)
router.post('/api/login', new AuthUserController().handle)

// Products
router.post('/api/product', new CreateProductController().handle)
router.get("/api/getproducts", new GetProductController().handle)
router.delete("/api/deleteproduct", new DeleteProductController().handle)

export { router }