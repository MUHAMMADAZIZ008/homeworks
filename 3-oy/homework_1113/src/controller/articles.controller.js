import {Articles} from "../models/articlesModels.js"
import { logger } from "../helpers/index.js"

export const createArticlesController = async(req, res, next) =>{
    try {
        const body = req.body
        const newArticle = new Articles(body)
        await newArticle.save()
        return res.status(201).send({
            message: "Created",
            data: newArticle._id
        })
    } catch (e) {
        logger.error(e)
        next(e)
    }
}
export const getAllArticlesController = async(req, res, next) =>{
    try {
        const allArticle = await Articles.find()
        return res.status(200).send({
            message: "success",
            data: allArticle
        })
    } catch (e) {
        logger.error(e)
        next(e)
    }
}
export const getByPaginationArticleController = async(req, res, next) =>{
    try{
        const {page, limit} = req.query
        const skip = (page - 1) * limit;
        const allData = await Articles.find()
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
export const getByArticleTitleController = async(req, res, next) =>{
    try{
        const {title} = req.query
        const data = await Articles.findOne({title})
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
export const updateArticleController = async(req, res, next) =>{
    try{
        const _id = req.params.id
        const body = req.body
        const updateData = await Articles.findByIdAndUpdate(_id, body)
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
export const deleteByIdArticleController = async(req, res, next) =>{
    try{
        const _id = req.params.id
        await Articles.findByIdAndDelete(_id)
        return res.status(200).send({
            message: "deleted"
        })
    }
    catch(e){
        logger.error(e)
        next(e)
    }
}