import pool from "../db/db.js"

export const createBoard = async(req, res, next) =>{
    try{
        const body = req.body
        const text = `INSERT INTO board (title, columns_id) VALUES($1, $2) RETURNING id`
        const values = [body.title, body.columns_id]

        const newBoard = await pool.query(text, values)
        return res.status(201).send({
            status: "Created",
            data: newBoard.rows
        })
    }
    catch(e){
        next(e)
    }
}

export const getAllBoard = async(req, res, next) =>{
    try{
        const text = `SELECT * FROM board`
        const allData = (await pool.query(text)).rows
        return res.status(201).send({
            status: "Success",
            data: allData
        })
    }
    catch(e){
        next(e)
    }
}
export const getBoardById = async(req, res, next) =>{
    try{
        const id = req.params.id

        const text = `SELECT * FROM board WHERE id = $1`
        const values = [id]
        const allData = (await pool.query(text, values)).rows
        if(!allData.length){
            return res.status(404).send({
                status: "id is not fount"
            })
        }

        return res.status(201).send({
            status: "Success",
            data: allData
        })
    }
    catch(e){
        next(e)
    }
}

export const updateBoard = async(req, res, next) =>{
    try{
        const body = req.body
        const id = req.params.id
        const text = `UPDATE board SET title = $1 WHERE id = $2 RETURNING id`
        const values = [body.title, id]
        const updateBoard = await pool.query(text, values)

        if(!updateBoard.rowCount){
            return res.status(404).send({
                status: "id is not fount"
            })
        }

        return res.status(201).send({
            status: "Updated",
            data: updateBoard.rows
        })
    }
    catch(e){
        next(e)
    }
}

export const removeBoard = async(req, res, next) =>{
    try{
        const id = req.params.id
        const text = `DELETE FROM board WHERE id = $1 RETURNING id`
        const values = [id]
        const deleteData = await pool.query(text, values)
        if(!deleteData.rowCount){
            return res.status(404).send({
                status: "id is not fount"
            })
        }

        return res.status(201).send({
            status: "deleted",
            data: updateBoard.rows
        })
    }
    catch(e){
        next(e)
    }
}
