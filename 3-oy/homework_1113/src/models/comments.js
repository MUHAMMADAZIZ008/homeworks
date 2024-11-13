import mongoose, { Schema } from "mongoose"

const commentsSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    author_id:{
        type: String,
        required: true,
        type : Schema.Types.ObjectId, 
        ref: "users"
    },
    category_id:{
        type: String,
        required: true,
        type : Schema.Types.ObjectId, 
        ref: "category"
    }
}, {timestamps: true})
export const Comments = mongoose.model("comments", commentsSchema)