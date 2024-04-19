import { Course } from '../models/course.model.js'

// @desc create new course
// route POST /api/v1/course/create-course
const createCourse = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const { title, description, duration, videoLink, price, thumbnail } = req.body;

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
        res.json({ status: 500, message: err.message || "Some error occurred while saving course." })
    }
}

// @desc update course by id
// route PUT /api/v1/course/update-course/:courseId
const updateCourse = async (req, res) => {
    try {
        const { courseId } = req.params;
        const { title, description, duration, videoLink, price, thumbnail } = req.body;

        const updatedCourse = await Course.findByIdAndUpdate(courseId, {
            title,
            description,
            duration,
            videoLink,
            price,
            thumbnail
        }, { new: true });

        if (!updatedCourse) {
            return res.status(404).json({ status: 404, message: 'Course not found' });
        }

        res.status(200).json({ status: 200, message: 'Course updated successfully', data: updatedCourse });
    } catch (err) {
        res.status(500).json({ status: 500, message: err.message || "Some error occurred while updating course." })
    }
}


// @desc get all courses (except own courses)
// route GET /api/v1/users/get-all-users
const getAllCourses = async (req, res) => {
    try {
        const { userId } = req.params;
        const courses = await Course.find({ createdBy: { $ne: userId } })
            .select('-createdAt -updatedAt') // Exclude createdAt and updatedAt
            .populate({
                path: 'createdBy',
                model: 'User',
            });

        if (courses.length > 0) {
            res.json({ status: 200, message: 'Courses retrieved successfully', data: courses });
        } else {
            res.json({ status: 200, message: 'No courses found', data: [] });
        }
    } catch (err) {
        res.json({ status: 500, message: err.message || "Some error occurred while retrieving course." })
    }
};

// @desc get user's own courses
// route GET /api/v1/users/get-own-courses/:userId
const getOwnCourses = async (req, res) => {
    try {
        const { userId } = req.params;
        const courses = await Course.find({ createdBy: userId })
            .select('-createdAt -updatedAt -createdBy')

        if (courses.length > 0) {
            res.json({ status: 200, message: 'User\'s courses retrieved successfully', data: courses });
        } else {
            res.json({ status: 200, message: 'No courses found for this user', data: [] });
        }
    } catch (err) {
        res.json({ status: 500, message: err.message || "Some error occurred while retrieving user's courses." })
    }
};




export { createCourse, updateCourse, getAllCourses, getOwnCourses } 