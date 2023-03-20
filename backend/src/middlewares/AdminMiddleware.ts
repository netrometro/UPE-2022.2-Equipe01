import { Request, Response, NextFunction } from "express";
import { AuthUserService } from "../services/users/AuthUserServices";

export default async function AdminMiddleware (req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization.split('Bearer ')[1]
    const user = await new AuthUserService().decryptToken(token)
    if(user.role == "ADMIN" || user.role == "GERENTE"){
      next()
    }else{
      res.status(403).json({message: 'Você não está autorizado!'})
    }
  };
  
  