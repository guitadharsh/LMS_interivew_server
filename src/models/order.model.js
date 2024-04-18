import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    orderBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'createdBy is required']
    },
    courseId: [{
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: [true, 'courseId is required']
    }],
    grandTotal: {
        type: Number,
        required: [true, 'price is required']
    },
    isPaymentSuccesfull: {
        type: Boolean,
    },
    paymentMode: {
        type: String,
    }
},
    { timestamps: true }
)

export const Order = mongoose.model('Order', orderSchema)