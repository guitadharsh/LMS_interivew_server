import Router from 'express'
import { getAllUsers } from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.get('/get-all-users', getAllUsers)

export { userRouter }