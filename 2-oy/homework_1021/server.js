import { config } from "dotenv"
import express from "express"
import {weatherRouts} from "./routes/weather.routes.js"

config()
const PORT = process.env.PORT
const app = express()
app.use(express.json())


app.use("/weather", weatherRouts)


app.listen(PORT, () =>{
    console.log(`Server ${PORT} da ishga tushdi`);
})