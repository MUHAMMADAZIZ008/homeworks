let fs = require("fs")
let path = require("path")

let filePath = path.join(process.cwd(), "task7")


fs.readdir(filePath, (err, fileArr) =>{
    if(fileArr.includes("files")){
        let filesPath = path.join(filePath, "files")
        fs.readdir(filesPath, (err, files) =>{
            files.forEach((name) =>{
                console.log(name);
            })
        })
    }else{
        console.log("FS operation failed");
    }
})