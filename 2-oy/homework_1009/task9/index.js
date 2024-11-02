import fs from "fs"
import path from "path"

try{
    let filePath = path.join(process.cwd(), "massage.txt")
    fs.appendFile(filePath, "This is appended content.\n", (err) =>{
        if(err){
            throw new Error(err)
        }
        console.log("Muvaffaqiyat")
    })
}catch(err){
    console.log(err);
}