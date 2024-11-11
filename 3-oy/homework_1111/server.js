import express from "express"

import { config } from "dotenv"
import { connect } from "mongoose"
import { commentsRouter, authRouter, categoryRouter, userRouter, articlesRouter, coursesRouter } from "./src/router/index.js"
import {rateLimit} from "express-rate-limit"

const limit = rateLimit({
  windowMs: 1 * 1000,
  limit: 1
})
config()
const app = express()
app.use(express.json())
app.use(limit)
app.use("/auth", authRouter)
app.use("/category", categoryRouter)
app.use("/users", userRouter)
app.use("/articles", articlesRouter)
app.use("/courses", coursesRouter)
app.use("/comments", commentsRouter)


app.use((err, req, res, next) =>{
  return res.status(500).send(err.message)
})

const port = process.env.PORT
const mongo_uri = process.env.MONGO_URI
app.listen(port, async() =>{
    await connect(mongo_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    console.log("connec to mongo");
    console.log(`seerver is running on ${port}`);
})
