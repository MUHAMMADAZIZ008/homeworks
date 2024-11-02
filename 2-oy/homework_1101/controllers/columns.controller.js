import pool from "../db/db.js"

export const createColumn = async(req, res, next) =>{
    try{
        const body = req.body
        const text = `INSERT INTO columns (column_limit) VALUES($1) RETURNING id`
        const values = [body.column_limit]
        const newBoard = await pool.query(text, values)
        return res.status(201).send({
            status: "Created",
            data: newBoard.id
        })
    }
    catch(e){
        next(e)
    }
}