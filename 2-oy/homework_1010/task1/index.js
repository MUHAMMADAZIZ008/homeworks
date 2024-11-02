import path from "path"
import http from "http"


let app = http.createServer((req, res) =>{
    if(req.method === "GET" && req.url === "/home"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(`
            <h1>Welcome to the Home Page</h1>
        `)
        res.end()
    } else if(req.method === "GET" && req.url === "/about"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(`
            <h1>Welcome to the About Page</h1>
        `)
        res.end()
    }
})

app.listen(3000, ()=>{
    console.log("Dastur 3000 - portda ishladi");
})
