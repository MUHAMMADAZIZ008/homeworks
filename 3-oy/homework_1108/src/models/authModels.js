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
    },
    role: { type: String, enum: ['SuperAdmin', 'Admin', 'User'], default: 'User' },
}, {timestamps: true})


export const Users = mongoose.model("users", usersSchema)