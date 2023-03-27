import { Request, Response } from 'express'
import { GetProductsService } from '../../services/products/GetProductsService'


export class GetProductsController {
  async handle(req: Request, res: Response) {
        const getProductsService = new GetProductsService()

        const result = await getProductsService.execute();

        return res.status(201).json(result);

  }
}