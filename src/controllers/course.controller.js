import { Course } from '../models/course.model.js'

// @desc create new course
// route POST /api/v1/course/create-course
const createCourse = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const { title, description, duration, topics, tags, videoLink } = req.body;
        const { thumbnail } = req.file.filename;

        const newCourse = new Course({
            createdBy,
            title,
            description,
            duration,
            topics,
            tags,
            thumbnail,
            videoLink
        })

        const savedCourse = await newCourse.save();
        res.json({ status: 200, message: 'Course created successfully', data: savedCourse })
    }
    catch (err) {
        res.json({ status: 500, message: 'Internal Server Error' })
    }
}

// @desc get all courses
// route GET /api/v1/users/get-all-users
const getAllCourse = () => {

}

export { createCourse, getAllCourse } 