import Router from 'express'
import { createCourse, getAllCourse } from '../controllers/course.controller'

const courseRouter = Router()

courseRouter.route('/create-course/:created-by', createCourse)