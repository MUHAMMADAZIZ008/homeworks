import {readFileSync, writeFileSync} from "fs"
export const readDb = (url) =>{
    let data = readFileSync(url, "utf-8")
    let parseData = JSON.parse(data)
    return parseData
}

export const wrideDb = (url, data) =>{
    writeFileSync(url, JSON.stringify(data), "utf-8")
    return true
}