import Router from 'express'
import { createCourse, getAllCourses } from '../controllers/course.controller.js'

const courseRouter = Router()

courseRouter.post('/create-course/:createdBy', createCourse)
courseRouter.get('/get-all-course/:userId', getAllCourses)

export { courseRouter }