export const createBoardMidd = (req, res, next) =>{
    try{
        const body = req.body
        if(!body.title || !body.columns_id){
            return res.status(400).send({
                status: "Please enter all fields!",
                data: body
            })
        }
        next()
    }
    catch(e){
        next(e)
    }
}
