let fs = require("fs")
let path = require("path")

let filePath = path.join(process.cwd(), "task5")


fs.readdir(filePath, (err, fileArr) =>{
    if(err){
        console.log(err);
        return
    }
    if(fileArr.includes("wrongFilename.txt")){
        let oldPath = path.join(process.cwd(), "task5", "wrongFilename.txt")
        let newPath = path.join(process.cwd(), "task5", "properFilename.md")
        fs.rename(oldPath, newPath, (err) =>{
            console.log(err);
        })
    }else{
        console.log("FS operation failed");
    }
})