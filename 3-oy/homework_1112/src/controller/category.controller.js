import { Category } from "../models/category.js"

export const createCategoryContrller = async (req, res, next) =>{
    try{
        const body = req.body
        const newCategory = await Category(body)    
        await newCategory.save()
        return res.status(200).send({
            message: "created",
            date: newCategory._id
        })
    }catch(e){
        next(e)
    }
}

export const getByPaginationController = async(req, res, next) =>{
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

export const getByCategoryNameController = async(req, res, next) =>{
    try{
        const {name} = req.query
        const data = await Category.find({name})
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
        next(e)
    }
}

export const getAllCategoryController = async(req, res, next) =>{
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



export const updateCategoryController = async(req, res, next) =>{
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
            message: "updated",
            beforeDate: updateData._id
        })
    }
    catch(e){
        next(e)
    }
}
export const deleteByIdCategoryController = async(req, res, next) =>{
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