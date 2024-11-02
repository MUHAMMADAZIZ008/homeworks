let fs = require("fs")
let path = require("path")

let filePath = path.join(process.cwd(), "task4")

fs.readdir(filePath, (err, file) =>{
    if(err){
        console.log(err);
        return err
    }
    if(!file.includes("fils")){
        let filsPath = path.join(filePath, "files")
        fs.mkdir(filsPath, (err) =>{
            console.log(err);
        })

        let sourceFile = path.join(filePath, "example.txt");
        let destinationFile = path.join(filsPath, "copy.txt");

        fs.copyFile(sourceFile, destinationFile,(err) =>{
            console.log("copy", err);
        })
    }else{
        console.log("FS operation failed");
    }
})