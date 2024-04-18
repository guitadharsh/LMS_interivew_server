import Router from 'express'
import { newOrder, getMyOrders } from '../controllers/order.controller.js'

const orderRouter = Router()

orderRouter.route('/new-order/:order-by', newOrder)
orderRouter.route('/get-all-order/:user-id', getMyOrders)

export { orderRouter }