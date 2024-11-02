import pool from "../db/db.js"

export const tasksCreate = async(req, res, next) =>{
    try{
        const body = req.body
        const text = `
        INSERT INTO tasks (title, ordernumber, description, userId, boardId, columns_id)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING id
        `
        const values = [body.title, body.orderNumber, body.description, body.userId, body.boardId, body.columnId]
        const newTask = await pool.query(text, values)
        return res.status(201).send({
            status: "success",
            data: newTask.rows
        })

    }
    catch(e){
        next(e)
    }
}

export const getAllTasks = async(req, res, next) =>{
    try{
        const allTasks = (await pool.query("select * from tasks")).rows
        return res.status(200).send({
            status: "Success",
            data: allTasks
        })
    }
    catch(e){
        next(e)
    }
}


export const getByIdTasks = async(req, res, next) =>{
    try{
        const taskId = req.params.taskId
        const allTasks = (await pool.query("select * from tasks where id = $1", [Number(taskId)])).rows

        if(!allTasks.length){
            return res.status(404).send({
                status: "Task is not fount!"
            })
        }


        return res.status(200).send({
            status: "Success",
            data: allTasks
        })
    }
    catch(e){
        next(e)
    }
}
export const updateTasks = async(req, res, next) =>{
    try{
        const body = req.body
        const taskId  = req.params.taskId

        const oldTask = (await pool.query("select * from tasks where id = $1", [Number(taskId)])).rows

        if(!oldTask.length){
            return res.status(404).send({
                status: "Task is not fount!"
            })
        }
        const text = `UPDATE tasks set
        title = $1, ordernumber = $2, description = $3, userid = $4, boardid = $5, columns_id = $6
        where id = $7`
        const values = [body.title || oldTask[0].title, body.ordernumber || oldTask[0].ordernumber, body.description || oldTask[0].description, body.userid || oldTask[0].userid, body.boardid || oldTask[0].boardid, body.columns_id || oldTask[0].columns_id, taskId]

        const updatedTask = await pool.query(text, values)
        return res.status(201).send({
            status: "updated",
            data: updatedTask.rowCount
        })

    }
    catch(e){
        next(e)
    }
}

export const deleteTasks = async(req, res, next) =>{
    try{
        const taskId = req.params.taskId
        const allTasks = (await pool.query("select * from tasks where id = $1", [Number(taskId)])).rows
        if(!allTasks.length){
            return res.status(404).send({
                status: "Task is not fount!"
            })
        }
        const text = `delete from tasks where id = $1`
        const values = [taskId]
        const newTask = await pool.query(text, values)
        return res.status(201).send({
            status: "deleted",
            data: newTask.rows
        })

    }
    catch(e){
        next(e)
    }
}