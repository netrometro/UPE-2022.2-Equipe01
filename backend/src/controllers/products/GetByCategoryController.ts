import e, { Request, Response } from "express";
import { GetProductIdService } from "../../services/products/GetProductIdService";
import { GetByCategoryService } from "../../services/products/GetByCategoryService";

export class GetByCategoryController {
    async handle(req: Request, res: Response) {
        try {
            const {id} = req.params;
    
            const getByCategoryService = new GetByCategoryService();
    
            const result = await getByCategoryService.execute({id: Number(id)});
    
            return res.status(200).json(result);

        } catch(err) {
            console.log(err);
            res.status(404).json({error:err})
        }
    }
}