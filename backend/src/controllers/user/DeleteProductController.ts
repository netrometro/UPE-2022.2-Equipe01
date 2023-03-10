import { Request, Response } from 'express'
import { DeleteProductService } from '../../services/users/DeleteProductService';

export class DeleteProductController {
  async handle(req: Request, res: Response) {
        const {name} = req.body;

        const deleteProductService = new DeleteProductService()

        const result = await deleteProductService.execute({name});

        return res.status(201).json(result);

  }
}