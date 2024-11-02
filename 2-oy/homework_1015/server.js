import express from 'express';
import router from './routes/users.routes.js'

let port = 3000
const app = express()
app.use(express.json())
app.use("/", router)


app.listen(port, () =>{
    console.log(`Dastur ${port} tda ishlamoqda`);
})