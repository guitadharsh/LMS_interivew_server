import { Order } from '../models/order.model.js'

// @desc create new order
// route POST /api/v1/order/new-order
const newOrder = async (req, res) => {
    try {
        const { orderBy, courseIds, grandTotal, isPaymentSuccesfull, paymentMode } = req.body;

        const order = Order.create({
            orderBy,
            courseId: courseIds,
            grandTotal,
            isPaymentSuccesfull,
            paymentMode
        });

        const savedOrder = await order.save();
        res.status(201).json({ status: 201, message: 'Order created successfully', data: savedOrder });
    }
    catch (err) {
        res.json({ status: 500, message: err.message || "Some error occurred while saving orders." })
    }
}

// @desc get my orders
// route POST /api/v1/order/new-order
const getMyOrders = async (req, res) => {
    try {
        const { userId } = req.params;
        const orders = await Order.find({ orderBy: userId })
            .populate('courseId')
            .exec();

        res.status(200).json({ status: 200, message: 'Orders retrieved successfully', data: orders });
    }
    catch (err) {
        res.json({ status: 500, message: err.message || "Some error occurred while retriving orders." })
    }
}

export { newOrder, getMyOrders } 