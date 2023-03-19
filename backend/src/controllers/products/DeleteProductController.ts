// import { Request, Response } from 'express'
// import { DeleteProductService } from '../../services/users/DeleteProductService';

// export class DeleteProductController {
//   async handle(req: Request, res: Response) {
//         const {id} = req.body;
//         const deleteProductService = new DeleteProductService()

//         const result = await deleteProductService.execute({id});

//         return res.status(201).json(result);

//   }
// }

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