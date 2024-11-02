import fs, { writeFile } from "fs";
import path from "path";
import http from "http";

let userDataJsonPath = path.join(process.cwd(), "userdata.json");

let login = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/login") {
        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            let parsedBody = JSON.parse(body); 
            fs.readFile(userDataJsonPath, "utf-8", (err, data) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Serverda xatolik yuz berdi");
                    return;
                }

                let users = JSON.parse(data);
                let isAuthenticated = false;

                for (let userInfo of users) {
                    if (parsedBody.username === userInfo.username && parsedBody.password === userInfo.password){
                        isAuthenticated = true;
                        break; 
                    }
                }

                if (isAuthenticated) {
                    res.writeHead(200, {
                        "Content-Type": "application/json"
                    });
                    res.end("true");
                } else {
                    res.writeHead(401, {
                        "Content-Type": "application/json",
                    });
                    res.end("false");
                }
            });
        });
    }else if (req.method === "POST" && req.url === "/register") {
        let body = "";
    
        req.on("data", chunk => {
            body += chunk.toString();
        });
    
        req.on("end", () => {
            let parsedBody = JSON.parse(body);
            fs.readFile(userDataJsonPath, "utf-8", (err, data) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Serverda xatolik yuz berdi");
                    return;
                }
    
                let parsData = JSON.parse(data);
                parsData.push(parsedBody);
    
                fs.writeFile(userDataJsonPath, JSON.stringify(parsData), (err) => {
                    if (err) {
                        res.writeHead(500, { "Content-Type": "text/plain" });
                        res.end("Ma'lumotni yozishda xatolik");
                        return;
                    }
    
                    res.writeHead(200, { "Content-Type": "text/plain" });
                    res.end("Ro'yxatdan o'tish muvaffaqiyatli bo'ldi");
                });
            });
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Sahifa topilmadi");
    }

});

login.listen(5500, () => {
    console.log("5500 - portda ishlamoqda");
});
