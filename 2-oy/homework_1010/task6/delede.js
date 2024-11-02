let fs = require("fs")
let path = require("path")

let filePath = path.join(process.cwd(), "task6")


fs.readdir(filePath, (err, fileArr) =>{
    if(err){
        console.log(err);
        return
    }
    if(fileArr.includes("fileToRemove.txt")){
        let deletePath = path.join(process.cwd(), "task6", "fileToRemove.txt")
        fs.unlink(deletePath, (err) =>{
            console.log(err);
        })
    }else{
        console.log("FS operation failed");
    }
})