import pool from "../db/db.js"

export const boardIdMidd = async (req, res, next) =>{
    try{
        const boardId = req.params.boardId
        const allData = (await pool.query("select * from board")).rows
        let isTrue = true
        for(let bord of allData){
            if(bord.id === +boardId){
                isTrue = false
                break
            }
        }
        if(isTrue){
            return res.status(404).send({
                status: "Board id is not fount!"
            })
        }
        next()
    }
    catch(e){
        next(e)
    }
}

export const createTasksMidd = async (req, res, next) =>{
    try{
        const body = req.body

        if(!body.title || !body.orderNumber || !body.description || !body.userId || !body.boardId || !body.columnId){
            return res.status(400).send({
                status: "Please enter all fields!",
                data: body
            })
        }


        const boardId = req.params.boardId

        const boardAllData = (await pool.query("select * from board")).rows
        let chackBoard = true
        for(let bord of boardAllData){
            if(bord.id === +boardId){
                chackBoard = false
                break
            }
        }
        if(chackBoard){
            return res.status(404).send({
                status: "Board id is not fount!"
            })
        }


        //users chack
        const userIdAllData = (await pool.query("select * from users")).rows
        let chackUser = true
        for(let bord of userIdAllData){
            if(bord.id === body.userId){
                chackUser = false
                break
            }
        }
        if(chackUser){
            return res.status(404).send({
                status: "User id is not fount!"
            })
        }

        //column chack
        const columnAllData = (await pool.query("select * from columns")).rows
        let chackColumn = true
        for(let bord of columnAllData){
            if(bord.id === +body.columnId){
                chackColumn = false
                break
            }
        }
        if(chackColumn){
            return res.status(404).send({
                status: "Column id is not fount!"
            })
        }
        next()
    }
    catch(e){
        next(e)
    }
}