import express from "express"
import userRouter from "./routes/users.routes.js"

let app = express()

let port = 2124

app.use(express.json())
app.use("/users", userRouter)

app.use((err, req, res, next) =>{
    const {masage, name, stack} = err
    res.status(401).send({masage, name, stack})
})


app.listen(port, () =>{
    console.log(`Dastur ${port} da ishga tushdi`);
})