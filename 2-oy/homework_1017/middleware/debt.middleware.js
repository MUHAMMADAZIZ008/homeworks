export const createDebtMiddleware = (req, res, next) =>{
    let body = req.body
    if(!body.email || !body.password){
        return res.status(400).send("username va parol kriting")
    }
    next()
}