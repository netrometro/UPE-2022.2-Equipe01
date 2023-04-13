import e, { Request, Response } from "express";
import { GetProductIdService } from "../../services/products/GetProductIdService";

export class GetProductIdController {
    async handle(req: Request, res: Response) {
        try {
            const {id} = req.params;
    
            const getProductIdServices = new GetProductIdService();
    
            const result = await getProductIdServices.execute({id: Number(id)});
    
            return res.status(200).json(result);

        } catch(err) {
            console.log(err);
            res.status(404).json({error:err})
        }
    }
}