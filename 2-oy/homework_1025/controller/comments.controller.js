import { allDataByComments, createCommmentDb } from "../database/db.js"

export const createComments = async (req, res, next) =>{
    try{
        let body = req.body
        let id = req.params.id
        let chack = createCommmentDb(id, body)
        if(chack){
            return res.status(200).send({
                massage: "created"
            })
        }
        return res.status(400).send({
            massage: "error"
        })
    }
    catch(e){
        next(e)
    }
}

export const getAllComments = async(req, res, next) =>{
    try{
        let getAllData = await allDataByComments()
        res.status(200).send({
            massage: getAllData
        })
    }
    catch(e){
        next(e)
    }
}