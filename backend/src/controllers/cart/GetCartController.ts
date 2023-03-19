import { Request, Response } from 'express'
import { GetCartService } from '../../services/cart/GetCartService'


export class GetCartController {
  async handle(req: Request, res: Response) {
        const getCartService = new GetCartService()

        const result = await getCartService.execute();

        return res.status(201).json(result);

  }
}