import { allDataDb, allDataDbByBooks, creatBook, deleteBook, updateBook } from "../database/db.js"

export const booksController = (req, res, next) =>{
    try{
        let body = req.body
        let chack = creatBook(body)
        if(chack){
            return res.status(200).send({
                massage: "Created"
            })
        } else{
            return res.status(400).send({
                massage: "Error"
            })
        }
    }
    catch(e){
        next(e)
    }
}
export const getBooks = async (req, res, next) =>{
    try{
        let allData = await allDataDbByBooks()
        if(allData){
            return res.status(200).send({
                massage: allData
            })
        } else{
            return res.status(400).send({
                massage: "error"
            })
        }
    }
    catch(e){
        next(e)
    }
}


export const getBooksById = async (req, res, next) =>{
    try{
        let id = req.params.id
        let allData = await allDataDbByBooks()
        for(let book of allData){
            if(book.id === +id){
                return res.status(200).send({
                    massage: book
                })
            }
        }
        return res.status(400).send({
            massage: "Not fount"
        })
    }
    catch(e){
        next(e)
    }
}



export const updateBooksById = async (req, res, next) =>{
    try{
        let id = req.params.id
        let body = req.body
        
        let allData = await allDataDbByBooks()
        
        for(let book of allData){
            if(book.id === +id){
                let check = await updateBook(id, body)
                if(check){
                    return res.status(200).send({
                        massage: "updated"
                    })
                }
            }
        }
        return res.status(400).send({
            massage: "Not fount"
        })
    }
    catch(e){
        next(e)
    }
}

export const deleteBooksById = async (req, res, next) =>{
    try{
        let id = req.params.id
        
        let allData = await allDataDbByBooks()
        
        for(let book of allData){
            if(book.id === +id){
                let check = await deleteBook(id)
                if(check){
                    return res.status(200).send({
                        massage: "deleted"
                    })
                }
            }
        }
        return res.status(400).send({
            massage: "Not fount"
        })
    }
    catch(e){
        next(e)
    }
}