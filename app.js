import express from 'express'
import cors from 'cors'
import { userRouter } from './src/routers/user.router.js'
import { courseRouter } from './src/routers/course.router.js'
import { orderRouter } from './src/routers/order.router.js'

const app = express()

app.use(cors())
app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static('public'))

app.use('/api/v1/user', userRouter)
app.use('/api/v1/course', courseRouter)
app.use('/api/v1/order', orderRouter)

export { app }