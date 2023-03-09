import { Request, Response } from "express";
import { CreateProductServices } from "../../services/users/CreateProductServices";

export class CreateProductController {
    async handle(req: Request, res: Response) {
        const {name, price, quantity} = req.body;

        const createProductServices = new CreateProductServices();

        const result = await createProductServices.execute({name, price, quantity});

        return res.status(201).json(result);
    }
}