import fs from "fs"
import path from "path"

let filePath = path.join(process.cwd(), "hello_world.txt")

fs.writeFile(filePath, "Hello world!", "utf-8", (err) => err ? console.log(err) : console.log("qo'shildi"))

fs.readFile(filePath, "utf-8", (err, date) =>{
    if(err){
        console.error(err);
        return
    }
    let now = Date()
    fs.appendFile(filePath, `\n${String(now)}`, "utf-8", (err) => err ? console.log(err) : console.log("vaqt qo'shildi"))
    console.log(date);
})