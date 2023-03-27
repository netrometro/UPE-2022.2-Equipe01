import { Request, Response } from 'express'
import { CreateCategoryService } from '../../services/category/CreateCategoryService'

class CreateCategoryController{
    async handle(req: Request, res: Response) {
        try {
            const {name, price, quantity} = req.body;
    
            const createProductServices = new CreateCategoryService();
    
            const result = await createProductServices.execute({ name });
    
            return res.status(201).json(result);

        } catch(err) {
            console.log(err);
            res.status(404).json({error:err})
        }
    }
}

export { CreateCategoryController }