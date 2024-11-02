import { Tasks } from "../model/index.js"

export const createTasksController = async(req, res, next) =>{
    try{
        const body = req.body
        const newTasks = await Tasks(body)
        await newTasks.save()
        return res.status(201).send({
            message: "Success",
            data: newTasks._id
        })
    }
    catch(e){
        next(e)
    }
}

export const getAllTasksController = async(req, res, next) =>{
    try{
        const allData = await Tasks.find()
        return res.status(201).send({
            message: "Success",
            data: allData
        })
    }
    catch(e){
        next(e)
    }
}

export const getTasksByIdController = async(req, res, next) =>{
    try{
        const id = req.params.id
        const task = await Tasks.findById(id)
        if(!task){
            return res.status(404).send({
                message: "Not Fount"
            })    
        }
        return res.status(201).send({
            message: "Success",
            data: task
        })
    }
    catch(e){
        next(e)
    }
}
export const updateTasksByIdController = async(req, res, next) =>{
    try{
        const body = req.body
        const id = req.params.id
        const updateTask = await Tasks.findByIdAndUpdate(id, body)
        return res.status(201).send({
            message: "Success",
            data: updateTask._id
        })
    }
    catch(e){
        next(e)
    }
}

export const deleteTasksByIdController = async(req, res, next) =>{
    try{
        const id = req.params.id
        await Tasks.findByIdAndDelete(id)
        return res.status(201).send({
            message: "Success"
        })
    }
    catch(e){
        next(e)
    }
}