import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    description: {
        type: String
    },
    duration: {
        type: String,
        required: [true, 'duration is required']
    },
    thumbnail: {
        type: String,
    },
    videolink: {
        type: String
    },
    price: {
        type: Number,
        required: [true, 'price is required']
    }
}, { timestamps: true }
)

export const Course = mongoose.model('Course', courseSchema)