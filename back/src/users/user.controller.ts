import { Request, Response, NextFunction } from 'express';
import UserService from './user.service';

interface DUserController {
    userService: UserService
}

export default class UserController{
    private userService
    constructor({ userService }: DUserController) {
        this.userService = userService
    }
    async getUser(req: Request, res: Response, next: NextFunction){
        try {
            const result = await this.userService.getUser()
            res.json(result)
        } catch (e) {
            next(e)
        }
    }
}