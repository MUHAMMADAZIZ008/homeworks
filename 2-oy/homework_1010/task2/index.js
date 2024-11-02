import http from "http"
import fs from "fs"
import os from "os"
import path from "path"

let app = http.createServer((req, res) =>{
    if(req.method === "GET" && req.url === "/home"){
        let filePath = path.join(process.cwd(), "task2","home.html")
        fs.readFile(filePath, "utf-8", (err, data) =>{
            if(err){
                console.log(err);
            }
            res.writeHead(200, {"Content-Type": "text/html"})
            res.write(data)
            res.end()
        })
    } else if(req.method === "GET" && req.url === "/product"){
        let filePath = path.join(process.cwd(), "task2", "product.html")
        fs.readFile(filePath, "utf-8", (err, data) =>{
            if(err){
                console.log(err);
            }
            res.writeHead(200, {"Content-Type": "text/html"})
            res.write(data)
            res.end()
        })
    }else if(req.method === "GET" && req.url === "/contact"){
        let filePath = path.join(process.cwd(), "task2", "contact.html")
        fs.readFile(filePath, "utf-8", (err, data) =>{
            if(err){
                console.log(err);
            }
            res.writeHead(200, {"Content-Type": "text/html"})
            res.write(data)
            res.end()
        })
    }else if(req.method === "GET" && req.url === "/price"){
        let filePath = path.join(process.cwd(), "task2", "price.html")
        fs.readFile(filePath, "utf-8", (err, data) =>{
            if(err){
                console.log(err);
            }
            res.writeHead(200, {"Content-Type": "text/html"})
            res.write(data)
            res.end()
        })
    }else if(req.method === "GET" && req.url === "/login"){
        let filePath = path.join(process.cwd(), "task2", "login.html")
        fs.readFile(filePath, "utf-8", (err, data) =>{
            if(err){
                console.log(err);
            }
            res.writeHead(200, {"Content-Type": "text/html"})
            res.write(data)
            res.end()
        })
    }
})

app.listen(3001, ()=>{
    console.log("dastur 3000 - portda ishlamoqda");
})