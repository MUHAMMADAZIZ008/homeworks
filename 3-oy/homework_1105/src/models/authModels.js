import mongoose from "mongoose"

const usersSchema = mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
}, {timestamps: true})

export const Users = mongoose.model("users", usersSchema)