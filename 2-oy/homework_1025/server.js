import express from "express"
import {config} from "dotenv"
import { bookRoutes, commentsRoutes, loginRoutes, registerRoutes } from "./routes/index.routes.js"

config()
const app = express()

app.use(express.json())
app.use("/register", registerRoutes)
app.use("/login", loginRoutes)
app.use("/books", bookRoutes)
app.use("/comments", commentsRoutes)


let port = process.env.PORT
app.listen(port, () =>{
    console.log(`Servera is runnig in ${port}`);
})