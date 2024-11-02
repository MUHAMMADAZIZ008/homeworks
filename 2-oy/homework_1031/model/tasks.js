import mongoose from "mongoose";

const tasksSchema = new mongoose.Schema({
    title : {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
},{
    timestamps: true
})

export const Tasks = mongoose.model("Tasks", tasksSchema)