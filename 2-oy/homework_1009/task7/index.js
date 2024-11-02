import fs from "fs"

let filePath = process.argv[1]

fs.readFile(filePath, "utf-8", (err, date) =>{
    if (err) {
        if (err.code === 'ENOENT') {
            console.error(`Xato: ${filePath} fayli topilmadi!`);
        } else {
            console.error(`Xato yuz berdi: ${err.message}`);
        }
        process.exit(1);
    }    
    console.log(`Fayl tarkibi: \n${date}`);
})

