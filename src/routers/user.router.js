import Router from 'express'
import { getAllUser } from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.route('/get-all-users', getAllUser)