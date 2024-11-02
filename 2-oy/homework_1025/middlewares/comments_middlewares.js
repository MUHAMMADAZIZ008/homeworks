import { allDataDb, allDataDbByBooks } from "../database/db.js"

export const commentsMiddleware = async(req, res, next) =>{
    try{
        let body = req.body
        if(!body.comment_text){
            return res.status(400).send({
                massage: "Enter your opinion"
            })
        }

        let id = req.params.id
        
        let allData = await allDataDbByBooks()
        let chack = false
        for(let book of allData){
            if(book.id === +id){
                chack = true
                break
            }
        }
        if(!chack){
            return res.status(400).send({
                massage: "book is not fount"
            })
        }
        let data = await allDataDb();
        let user_chack = false
        for(let user of data){
            if(user.id === +body.user_id){
                user_chack = true
            }
        }

        if(!user_chack){
            return res.status(400).send({
                massage: "user is not fount"
            })
        }
        next()
    }
    catch(e){
        next(e)
    }
}