import { config } from "dotenv"
import express from "express"
import { connect } from "mongoose"
import { commentsRouter, authRouter, categoryRouter, userRouter, articlesRouter } from "./src/router/index.js"

config()
const app = express()
app.use(express.json())
app.use("/auth", authRouter)
app.use("/category", categoryRouter)
app.use("/users", userRouter)
app.use("/articles", articlesRouter)
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
