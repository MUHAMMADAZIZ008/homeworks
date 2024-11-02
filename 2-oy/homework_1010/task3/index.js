let fs = require("fs")
let path = require("path")

let filePath = path.join(process.cwd(), "task3")
fs.readdir(filePath, (err, fileArr) =>{
    let fileTxt = path.join(process.cwd(), "task3", "fresh.txt")
    if(err){
        console.error(err);
        return;
    }
    if(!fileArr.includes("fresh.txt")){
        fs.writeFile(fileTxt, "I am fresh and young", (err) =>{
            console.log(err);
        })
    }else{
        fs.writeFile(fileTxt, "FSoperation failed", (err) =>{
            console.log(err);
        })
    }
})