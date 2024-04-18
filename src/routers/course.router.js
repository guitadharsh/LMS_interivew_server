import Router from 'express'
import { createCourse, getAllCourses } from '../controllers/course.controller.js'
import { upload } from '../middleware/multer.middleware.js'

const courseRouter = Router()

courseRouter.route('/create-course/:createdBy', upload.single('thumbnail'), createCourse)
courseRouter.route('/get-all-course/:userId', getAllCourses)

export { courseRouter }