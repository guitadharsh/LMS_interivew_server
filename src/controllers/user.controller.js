import { User } from '../models/user.model.js'

// @desc get all users
// route GET /api/v1/users/get-all-users
const getAllUsers = async () => {
    try {
        const users = await User.find()
        if (users.length > 0) {
            res.json({ status: 200, message: 'Users Retrieved Successfully', data: users });
        }
        else {
            res.json({ status: 200, message: 'No users found', data: [] });
        }
    }
    catch (error) {
        res.json({ status: 500, message: 'Server Error' });
    }
}

export { getAllUsers }