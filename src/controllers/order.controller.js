import { Course } from '../models/course.model.js'
import { Order } from '../models/order.model.js'

const newOrder = async(req, res) => {
try {

}
catch(err) {
    res.json({status: 500, message: err.message || "Some error occurred while saving orders."})
}
}

const getMyOrders = async(req, res) => {
    try {

    }
    catch(err) {
        res.json({status: 500, message: err.message || "Some error occurred while retriving orders."})
    }
}

export { newOrder, getMyOrders } 