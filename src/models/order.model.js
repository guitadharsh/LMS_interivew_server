import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    courseid: [{
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: [true, 'courseId is required']
    }],
    grandtotal: {
        type: Number,
        required: [true, 'price is required']
    },
    isPaymentSuccesfull: {
        type: Boolean,
    },
    paymentmode: {
        type: String,
    }
},
    { timestamps: true }
)

export const Order = mongoose.model('Order', orderSchema)