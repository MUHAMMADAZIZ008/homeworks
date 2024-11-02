export const loginMiddlewars = (req, res, next) =>{
    try{
        let body = req.body
        if(!body.username || !body.password){
            return res.status(400).send({
                message: "Enter username and password!" 
            })
        }
        next()
    }
    catch(e){
        next(e)
    }
}