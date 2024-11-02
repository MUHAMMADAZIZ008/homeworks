import fs from "fs"
import path from "path"

try{
    let filePath = path.join(process.cwd(), "massage.txt")
    fs.writeFile(filePath, "Hello world!", (err) =>{
        if(err){
            throw new Error(err)
        }
        console.log("Muvaffaqiyat")
    })
}catch(err){
    console.log(err);
}