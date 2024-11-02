import express, { json } from "express"
import  fs from "fs"
import path from "path"
import { send } from "process"
import { styleText } from "util"

const app = express()
app.use(express.json())

let example = {
    "id" : 1,
    "title" : "men",
    "auther" : "Fotih Duman",
    "year" : 2018
}

let jsonFilePath = path.join(process.cwd(), "booksData.json")

app.get("/books", (req, res) =>{
    fs.readFile(jsonFilePath, "utf-8",(err, data) =>{
        if(err){
            return res.status(401).send("Faylni o'qishda muammo yuz berishdi!")
        }
        res.send(data)
    })
})

app.get("/books/:id", (req, res) =>{
    let params = req.params
    fs.readFile(jsonFilePath, "utf-8", (err, data) =>{
        if (err) {
            return res.status(401).send("Faylni o'qishda muammo yuz berishdi!")
        }
        for(let book of JSON.parse(data)){
            if(book.id === +params.id){
                res.send(book)
            }
        }
        return res.status(404).send("Bunday kitob yo'q")
    })
})

app.post("/books", (req, res) =>{
    let body = req.body
    fs.readFile(jsonFilePath, "utf-8", (err, data) =>{
        if (err) {
            return res.status(401).send("Faylni o'qishda muammo yuz berishdi!")
        }
        let books = JSON.parse(data)

        let newBooks = {
            id : Math.floor(Math.random() * 10000 + 1),
            ...body
        }
        books.push(newBooks)

        fs.writeFile(jsonFilePath, JSON.stringify(books), (err) =>{

            return res.status(400).send("Faylga yozishda muammo bor!")
        })
        res.status(200).send("Muafaqiyatli qo'shildi")
    })
})

app.put("/books/:id", (req, res) =>{
    let body = req.body
    let params = req.params
    fs.readFile(jsonFilePath, "utf-8", (err, data) =>{
        if (err) {
            return res.status(401).send("Faylni o'qishda muammo yuz berishdi!")
        }
        let books = JSON.parse(data)
        let chackId = false
        for(let book of books){
            if(book.id === +params.id){
                book.title = body.title
                book.author = body.author
                book.year = body.year
                chackId = true
                break;
            }
        }
        if (chackId) {
            fs.writeFile(jsonFilePath, JSON.stringify(books), (err) => {
                if (err) {
                    return res.status(500).send('Faylga yozishda muammo yuz berdi!');
                }
                return res.status(200).send('Kitob muvaffaqiyatli yangilandi');
            });
        } else {
            return res.status(404).send('Kitob topilmadi');
        }
    })
})

app.delete("/books/:id", (req, res) =>{
    let params = req.params
    fs.readFile(jsonFilePath, "utf-8", (err, data) =>{
        if (err) {
            return res.status(401).send("Faylni o'qishda muammo yuz berishdi!")
        }
        let books = JSON.parse(data)
        let chackId = false
        for(let book of books){
            if(book.id === +params.id){
                chackId = true
                break
            }
        }
        if(chackId){
            let deleteBook = []
            for(let book of books){
                if(book.id !== +params.id){
                    deleteBook.push(book)
                }
            }
            fs.writeFile(jsonFilePath, JSON.stringify(deleteBook), (err) =>{
                return res.status(500).send('Faylga yozishda muammo yuz berdi!');
            })
            return res.status(200).send('Kitob muvaffaqiyatli o\'chirildi');
        }else{
            return res.status(404).send('Kitob topilmadi');
        }
    })
})

let port = 8000
app.listen(port, () =>{
    console.log(`Dastur ${port} tada ishlamoqda...`);
})