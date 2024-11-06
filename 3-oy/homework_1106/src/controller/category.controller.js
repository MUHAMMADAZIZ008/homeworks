import { Category } from "../models/index.js"

export const categoryCreateCon = async(req, res, next) =>{
    try{
        const body = req.body
        const newCategory = await Category(body)    
        await newCategory.save()
        return res.status(200).send({
            message: "created",
            date: newCategory._id
        })
    }
    catch(e){
        next(e)
    }
}

export const getAllCreateCon = async(req, res, next) =>{
    try{
        const allData = await Category.find()
        return res.status(200).send({
            message: "success",
            date: allData
        })
    }
    catch(e){
        next(e)
    }
}

export const getByNameCreateCon = async(req, res, next) =>{
    try{
        const {name} = req.query
        const data = await Category.find({name})
        if(!data.name){
            return res.status(404).send({
                message: "not found",
            })            
        }
        return res.status(200).send({
            message: "success",
            date: allData
        })
    }
    catch(e){
        next(e)
    }
}

export const getByIdCreateCon = async(req, res, next) =>{
    try{
        const _id = req.params.id
        const date = await Category.find({_id})
        if(!date[0]._id){
            return res.status(404).send({
                message: "not found",
            }) 
        }
        return res.status(200).send({
            message: "success",
            date: date
        })
    }
    catch(e){
        next(e)
    }
}


export const getByPaginationCon = async(req, res, next) =>{
    try{
        const {page, limit} = req.query
        const skip = (page - 1) * limit;
        const allData = await Category.find()
            .skip(skip)
            .limit(limit)
        return res.status(200).send({
            message: "success",
            date: allData
        })
    }
    catch(e){
        next(e)
    }
}


export const updateByIdCreateCon = async(req, res, next) =>{
    try{
        const _id = req.params.id
        const body = req.body
        const updateData = await Category.findByIdAndUpdate(_id, body)
        if(!updateData._id){
            return res.send({
                message: "not update"
            })
        }
        return res.status(200).send({
            message: "success",
            beforeDate: updateData
        })
    }
    catch(e){
        next(e)
    }
}



export const deleteByIdCreateCon = async(req, res, next) =>{
    try{
        const _id = req.params.id
        await Category.findByIdAndDelete(_id)
        return res.status(200).send({
            message: "deleted"
        })
    }
    catch(e){
        next(e)
    }
}