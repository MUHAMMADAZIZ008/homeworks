import path from "path"
import fs from "fs"

let docs = path.join(process.cwd(), "readme.md")
    

fs.writeFile(docs, "", "utf-8", (err) => err ? console.log(err) : console.log("+++"))
