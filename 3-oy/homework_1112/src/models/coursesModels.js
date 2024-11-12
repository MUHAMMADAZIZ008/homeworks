import mongoose, { Schema } from "mongoose"

const coursesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category_id:{
        type: String,
        required: true,
        type: Schema.Types.ObjectId,
        ref: "category"
    },
    description: {
        type: String,
        required: false,
    }
},{timestamps: true});

export const Courses = mongoose.model("courses", coursesSchema)