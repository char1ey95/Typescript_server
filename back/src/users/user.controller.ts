import { Request, Response, NextFunction } from 'express';

export default class UserController{
    async getUser(req: Request, res: Response, next: NextFunction){
        try {
            console.log(req.body)
            res.json()
        } catch (e) {
            next(e)
        }
    }
}