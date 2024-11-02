import fs from "fs"

let filePath = process.cwd()

fs.readdir(filePath, (err, fileName) =>{
    if(err){
        console.error(err);
        return
    }
    fileName.forEach((name) =>{
        console.log(name);
    })
})