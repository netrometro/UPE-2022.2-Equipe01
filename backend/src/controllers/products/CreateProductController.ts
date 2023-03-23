import e, { Request, Response } from "express";
import { CreateProductService } from "../../services/products/CreateProductService";

export class CreateProductController {
    async handle(req: Request, res: Response) {
        try {
            const {name, price, quantity, categoryId} = req.body;
    
            const createProductServices = new CreateProductService();
    
            const result = await createProductServices.execute({name, price, quantity, categoryId});
    
            return res.status(201).json(result);

        } catch(err) {
            console.log(err);
            res.status(404).json({error:err})
        }
    }
}