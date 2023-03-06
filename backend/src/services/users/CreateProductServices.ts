import { Request, Response } from "express";
import { CreateProductController } from "../../controllers/user/CreateProductController";

export class ProductServices {
    async handle(req: Request, res: Response) {
        const {name, price, quantity} = req.body;

        const createProductController = new CreateProductController();

        const result = await createProductController.execute({name, price, quantity});

        return res.status(201).json(result);
    }
}