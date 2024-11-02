import path from "path"
import fs from "fs"
import { error } from "console";

let filePath = path.join(process.cwd(), "numbers.txt")
function writeRandom(num) {
    // let fileDate = ""
    // fs.readFile(filePath, "utf-8", (err, date)=>{
    //     if(err){
    //         console.error(err);
    //         return;
    //     }
    //     fileDate = date
    // })

    fs.appendFile(filePath, String(num) + "\n", "utf-8", (err) =>{
        if(err){
            console.log(err);
            return;
        }
    })
}



for(let i = 0; i < 100; i++){
    let randomNum = Math.floor(Math.random() * 100 + 1)
    writeRandom(randomNum)
}

let arr = [];

fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let result = data.split("\n");
    arr.push(...result);
    console.log(arr);
});
