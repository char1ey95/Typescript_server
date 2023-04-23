import { Router } from "express"
import { mainRouter } from 'src/main/main.router'
import { userRouter } from 'src/users/user.router'
import { authRouter } from 'src/auth/auth.router'

export const router = Router()

router.use('/', mainRouter)
router.use('/users', userRouter)
router.use('/auths', authRouter)