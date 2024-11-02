import express from "express"
import mongoose from "mongoose"
import { config } from "dotenv"
import { tasksRoutes, usersRoutes } from "./routes/index.js"
config()

const app = express()
app.use(express.json())

app.use("/users", usersRoutes)
app.use("/tasks", tasksRoutes)


const port = process.env.PORT
const mongoDb = process.env.MONGO_URI
app.listen(port, async()=>{
    await mongoose.connect(mongoDb)
    console.log("Connnect to mongoDb");
    console.log(`server is running on ${port}`);
})