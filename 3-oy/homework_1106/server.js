import { config } from "dotenv"
import express from "express"
import { connect_mongo } from "./src/config/db.js"
import { authRouter, categoryRouter, userRouter } from "./src/routes/index.js"

config()

const app = express()
app.use(express.json())
app.use("/auth", authRouter)
app.use("/admin", userRouter)
app.use("/category", categoryRouter)


const mongo_uri = process.env.MONGO_URI
const port = process.env.PORT
app.listen(port, async() =>{
    await connect_mongo(mongo_uri)
    console.log(`server is runnig to ${port}`);
})