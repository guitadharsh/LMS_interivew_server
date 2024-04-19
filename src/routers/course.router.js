import Router from 'express'
import { createCourse, getAllCourses, updateCourse } from '../controllers/course.controller.js'

const courseRouter = Router()

courseRouter.post('/create-course/:createdBy', createCourse)
courseRouter.put('/update-course/:courseId', updateCourse)
courseRouter.get('/get-all-course/:userId', getAllCourses)

export { courseRouter }