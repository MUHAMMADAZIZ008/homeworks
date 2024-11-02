let fs = require("fs")
let path = require("path")

let filePath = path.join(process.cwd(), "task8")


fs.readdir(filePath, (err, fileArr) =>{
    if(fileArr.includes("fileToRead.txt")){
        let readFile = path.join(filePath, "fileToRead.txt")
        fs.readFile(readFile, "utf-8",(err, data) =>{
            if(err){
                console.log(err);
                return;
            }
            console.log(data);
        })
    }else{
        console.log("FS operation failed");
    }
})