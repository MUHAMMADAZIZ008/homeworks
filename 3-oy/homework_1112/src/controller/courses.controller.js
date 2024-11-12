import { Courses } from "../models/coursesModels.js"

export const createCoursesController = async(req, res, next) =>{
    try {
        const body = req.body
        const newCourses = new Courses(body)
        await newCourses.save()
        return res.status(201).send({
            message: "Created",
            data: newCourses._id
        })
    } catch (e) {
        next(e)
    }
}

export const getAllCoursesControllerr = async(req, res, next) =>{
    try{
        const allData = await Courses.find()
        return res.status(200).send({
            message: "success",
            date: allData
        })
    }
    catch(e){
        next(e)
    }
}

export const getByArticleNameController = async(req, res, next) =>{
    try{
        const {title} = req.query
        const data = await Courses.findOne({title})
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

export const getByPaginationCoursesController = async(req, res, next) =>{
    try{
        const {page, limit} = req.query
        const skip = (page - 1) * limit;
        const allData = await Courses.find()
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



export const updateCoursesControllerr = async(req, res, next) =>{
    try{
        const _id = req.params.id
        const body = req.body
        const updateData = await Courses.findByIdAndUpdate(_id, body)
        if(!updateData._id){
            return res.status(404).send({
                message: "Not found"
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


export const deleteCoursesControllerr = async(req, res, next) =>{
    try{
        const _id = req.params.id
        const deleteData = await Courses.findByIdAndDelete(_id)
        if(!deleteData._id){
            return res.status(404).send({
                message: "Not found"
            })
        }
        return res.status(200).send({
            message: "deleted",
            data: deleteData._id
        })
    }
    catch(e){
        next(e)
    }
}