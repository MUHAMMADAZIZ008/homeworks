import mongoose, { Schema } from "mongoose"

const articlesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
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


export const Articles = mongoose.model("articles", articlesSchema)