import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    login: {
        type: Boolean,
        default: true
    },
    password: {
        type: String,
        require: true
    }
},{
    timestamps: true
})

export const Users = mongoose.model("Users", userSchema)