import { Request, Response } from "express";
import { UpdateProductService } from "../../services/products/UpdateProductService";

export class UpdateProductController {
    async handle(req: Request, res: Response) {
        try {
            const {id, name, price, quantity} = req.body;
    
            const updateProductServices = new UpdateProductService();
    
            const result = await updateProductServices.execute({id, name, price, quantity});
    
            return res.status(201).json(result);

        } catch(err) {
            console.log(err);
            res.status(404).json({error:err})
        }
    }
}