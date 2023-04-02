import e, { Request, Response } from "express";
import { DeleteProductService } from "../../services/products/DeleteProductService";

export class DeleteProductController {
    async handle(req: Request, res: Response) {
        try {
            const {id} = req.body;
    
            const deleteProductServices = new DeleteProductService();
    
            const result = await deleteProductServices.execute({id});
    
            return res.status(201).json(result);

        } catch(err) {
            console.log(err);
            res.status(404).json({error:err})
        }
    }
}