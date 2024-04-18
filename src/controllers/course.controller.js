import { Course } from '../models/course.model.js'

// @desc create new course
// route POST /api/v1/course/create-course
const createCourse = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const { title, description, duration, videoLink, price } = req.body;
        const { thumbnail } = req.file.filename;

        const newCourse = new Course({
            createdBy,
            title,
            description,
            duration,
            price,
            thumbnail,
            videoLink,
            createdBy
        })

        const savedCourse = await newCourse.save();
        res.json({ status: 200, message: 'Course created successfully', data: savedCourse })
    }
    catch (err) {
        res.json({status: 500, message: err.message || "Some error occurred while saving course."})
    }
}

// @desc get all courses (except own courses)
// route GET /api/v1/users/get-all-users
const getAllCourses = async (req, res) => {
    try {
        const { userId } = req.params;
        const { page = 1, limit = 10 } = req.query;

        //skip
        const skip = (page - 1) * limit;

        const courses = await Course.find({ createdBy: { $ne: userId } }, { timestamps: 0 })
            .populate({
                path: 'createdBy',
                model: 'User',
            })
            .limit(parseInt(limit))
            .skip(skip);

        if (courses.length > 0) {
            res.json({ status: 200, message: 'Courses retrieved successfully', data: courses });
        } else {
            res.json({ status: 200, message: 'No courses found', data: [] });
        }
    } catch (err) {
        res.json({status: 500, message: err.message || "Some error occurred while retriving course."})
    }
};


export { createCourse, getAllCourses } 