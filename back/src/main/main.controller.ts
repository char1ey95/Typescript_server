import { Request, Response, NextFunction } from "express"

export default class MainController{
    async getMain(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req.body)
            res.json()
        } catch (e) {
            next(e)
        }
    }
}