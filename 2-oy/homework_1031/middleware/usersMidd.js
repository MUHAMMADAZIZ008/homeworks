export const usersMidd = (req, res, next) =>{
    try{
        let body = req.body
        if(!body.name || !body.password){
            return res.status(400).send({
                message: "Fill"
            })
        }
        next()
    }
    catch(e){
        next(e)
    }
}