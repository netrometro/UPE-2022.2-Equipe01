import e, { Request, Response } from "express";
import { CreateCartService } from "../../services/cart/CreateCartService";

export class CreateCartController {
    async handle(req: Request, res: Response) {
        try {
            const {productId, price, quantity} = req.body;
    
            const createCartServices = new CreateCartService();
    
            const result = await createCartServices.execute({productId, price, quantity});
    
            return res.status(201).json(result);

        } catch(err) {
            console.log(err);
            res.status(404).json({error:err})
        }
    }
}