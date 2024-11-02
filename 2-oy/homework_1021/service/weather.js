import { readDb, wrideDb } from "./db.js"
import path from "path"
let weatherJsonPath = path.join(process.cwd(), "database", "weather.json")

export const createWeather = (data) =>{
    let weathers = readDb(weatherJsonPath)
    let newWeather = {
        id : weathers.length + 1,
        ...data
    }
    weathers.push(newWeather)
    let check = wrideDb(weatherJsonPath, weathers)
    if(check){
        return true
    }else{
        return false
    }
}
export const getAllweather = () =>{
    let weathers = readDb(weatherJsonPath)
    return weathers
}

export const updateWeatherDb = (data, id) =>{
    let weathers = readDb(weatherJsonPath)
    for (let i = 0; i < weathers.length; i++){
        if(weathers[i].id === +id){
            let oldId = weathers[i].id
            weathers[i] = {
                id : oldId,
                ...data
            }
            break
        }
    }

    let check = wrideDb(weatherJsonPath, weathers)
    if(check){
        return true
    }else{
        return false
    }
}

export const deleteWeatherDb = (id) =>{
    let weathers = readDb(weatherJsonPath)
    for (let i = 0; i < weathers.length; i++){
        if(weathers[i].id === +id){
            weathers.splice(i, 1)
            break
        }
    }
    let check = wrideDb(weatherJsonPath, weathers)
    if(check){
        return true
    }else{
        return false
    }
}