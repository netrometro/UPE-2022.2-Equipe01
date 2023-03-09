import { Request, Response } from 'express'
import { GetProductService } from '../../services/users/GetProductService'


export class GetProductController {
  async handle(req: Request, res: Response) {
        const getProductService = new GetProductService()

        const result = await getProductService.execute();

        return res.status(201).json(result);

  }
}