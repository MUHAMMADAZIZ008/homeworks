export const tasksMidd = (req, res, next) =>{
    try{
        const body = req.body
        if(!body.title || !body.description){
            return res.status(400).send({
                message: "Fill!"
            })
        }
    }
    catch(e){
        next(e)
    }
}