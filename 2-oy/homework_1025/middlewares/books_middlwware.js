export const booksMiddlewares = (req, res, next) =>{
    try{
        let body = req.body
        if(!body.title || !body.author || !body.publication_date || !body.gener || !body.user_id){
            return res.status(400).send({
                massage: "Fill all fields"
            })
        }
        next()
    }
    catch(e){
        next(e)
    }
}