import { logger } from "../helpers/index.js"
import { Comments } from "../models/comments.js"  
import { statusCodes } from "../utils/constants/statusCodes.js"
export const createCommentController = async(req, res, next) =>{
    try {
        const body = req.body
        const newComments = new Comments(body)
        await newComments.save()
        return res.status(statusCodes.CREATED).send({
            message: "Created",
            data: newComments._id
        })
    } catch(e){
        logger.error(e)
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
        logger.error(e)
        next(e)
    }
}


export const getByArticleContentController = async(req, res, next) =>{
    try{
        const {title} = req.query
        const data = await Comments.findOne({title})
        if(!data){
            return res.status(404).send({
                message: "not found",
            })            
        }
        return res.status(200).send({
            message: "success",
            date: data
        })
    }
    catch(e){
        logger.error(e)
        next(e)
    }
}

export const getByPaginationCommentsController = async(req, res, next) =>{
    try{
        const {page, limit} = req.query
        const skip = (page - 1) * limit;
        const allData = await Comments.find()
            .skip(skip)
            .limit(limit)
        return res.status(200).send({
            message: "success",
            date: allData
        })
    }
    catch(e){
        logger.error(e)
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
        logger.error(e)
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
        logger.error(e)
        next(e)
    }
}