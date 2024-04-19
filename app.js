import express from 'express'
import cors from 'cors'
import { userRouter } from './src/routers/user.router.js'
import { courseRouter } from './src/routers/course.router.js'
import { orderRouter } from './src/routers/order.router.js'

const app = express()

//cors restriction
const allowedOrigins = [process.env.DEVELOPMENT_ORIGIN, process.env.PRODUCTION_ORIGIN];
app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS')); 
      }
    }
  }));

app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static('public'))

app.use('/api/v1/user', userRouter)
app.use('/api/v1/course', courseRouter)
app.use('/api/v1/order', orderRouter)

export { app }