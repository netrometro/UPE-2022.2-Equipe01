import { Request, Response } from "express";
import { CreateProductService } from "../../services/users/CreateProductService";

export class CreateProductController {
    async handle(req: Request, res: Response) {
        const {name, price, quantity} = req.body;

        const createProductServices = new CreateProductService();

        const result = await createProductServices.execute({name, price, quantity});

        return res.status(201).json(result);
    }
}