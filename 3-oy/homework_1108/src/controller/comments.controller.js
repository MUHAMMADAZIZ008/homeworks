import { Comments } from "../models/comments.js"  
import { statusCodes } from "../utils/constants/statusCodes.js"
import { logger } from "../utils/logger.js"
export const createCommentController = async(req, res, next) =>{
    try {
        const body = req.body
        const newComments = new Comments(body)
        await newComments.save()
        return res.status(statusCodes.CREATED).send({
            message: logger.info("Created"),
            data: newComments._id
        })
    } catch (e) {
        next(e)
    }
}

export const getAllCommentControllerr = async(req, res, next) =>{
    try{
        const allData = await Comments.find()
        return res.status(200).send({
            message: "success",
            date: allData
        })
    }
    catch(e){
        next(e)
    }
}
export const updateCommentControllerr = async(req, res, next) =>{
    try{
        const _id = req.params.id
        const body = req.body
        const updateData = await Comments.findByIdAndUpdate(_id, body)
        if(!updateData._id){
            return res.send({
                message: "not update"
            }) 
        }
        return res.status(200).send({
            message: "updated",
            beforeDate: updateData._id
        })
    }
    catch(e){
        next(e)
    }
}

export const deleteCommentControllerr = async(req, res, next) =>{
    try{
        const _id = req.params.id
        await Comments.findByIdAndDelete(_id)
        return res.status(200).send({
            message: "deleted"
        })
    }
    catch(e){
        next(e)
    }
}