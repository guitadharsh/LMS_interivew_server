import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    }
}, { timestamps: true }
)

export const User = mongoose.model('User', userSchema)