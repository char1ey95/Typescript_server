import { Request, Response, NextFunction } from 'express';

export default class AuthController{
    async getAuth(req: Request, res: Response, next: NextFunction){
        try {
            console.log(req.body)
            res.json()
        } catch (e) {
            next(e)
        }
    }
}