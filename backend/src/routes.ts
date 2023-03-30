import { Router } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { CreateProductController } from './controllers/products/CreateProductController'
import { GetProductsController } from './controllers/products/GetProductsController'
import { DeleteProductController } from './controllers/products/DeleteProductController'
import { CreateCartController } from './controllers/cart/CreateCartController'
import { GetCartController } from './controllers/cart/GetCartController'
import { GetProductIdController } from './controllers/products/GetProductIdController'
import { UpdateProductController } from './controllers/products/UpdateProductController'

const router = Router()

// Users
router.post('/api/users', new CreateUserController().handle)
router.post('/api/login', new AuthUserController().handle)

// Products
router.post('/api/product', new CreateProductController().handle)
router.get("/api/getproducts", new GetProductsController().handle)
router.get("/api/getproductid", new GetProductIdController().handle)
router.delete("/api/deleteproduct", new DeleteProductController().handle)
router.put("/api/updateproduct", new UpdateProductController().handle)

// Cart
router.post('/api/addcart', new CreateCartController().handle)
router.get("/api/getcart", new GetCartController().handle)

export { router }