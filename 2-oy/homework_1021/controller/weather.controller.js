import {createWeather, deleteWeatherDb, getAllweather, updateWeatherDb} from "../service/weather.js"
export const weatherController = (req, res, next) =>{
    try{
        let body = req.body
        let check = createWeather(body)
        if(check){
            return res.status(200).send("Yangi oh havo qo'shildi")
        }
        return res.status(400).send("Qo'shishda muammo bor!")
    }catch(e){
        next(e)
    }
}
export const getById = (req, res, next) =>{
    try{
        let id = req.params.id

        let weathers = getAllweather()
        let showData = weathers.find(item => item.id === +id)
        res.status(200).send(showData)
    }catch(e){
        next(e)
    }
}

export const getPegination = (req, res, next) =>{
    try{
        let {page, limit} = req.query
        let weathers = getAllweather()
        let startIndex = (page - 1) * limit
        let showData = weathers.slice(startIndex, limit)
        res.status(200).send(showData)
    }catch(e){
        next(e)
    }
}
// String().toLowerCase().includes

export const getSearch = (req, res, next) =>{
    try{
        let weathers = getAllweather()
        let {search} = req.query
        let showData = []
        showData.push(weathers.filter(item => item.country.toLowerCase().includes(search.toLowerCase())))
        res.status(200).send(showData)
    }catch(e){
        next(e)
    }
}


export const updateWeather = (req, res, next) =>{
    try{
        let body = req.body
        let id = req.params.id
        let check = updateWeatherDb(body, id)
        if(check){
            res.status(200).send("Yangilandi")
        }else{
            res.status(400).send("Muammo bor!")
        }
    }catch(e){
        next(e)
    }
}

export const deleteWeather = (req, res, next) =>{
    try{
        let id = req.params.id
        let check = deleteWeatherDb(id)
        if(check){
            res.status(200).send("O'chirildi")
        }else{
            res.status(400).send("Muammo bor!")
        }
    }catch(e){
        next(e)
    }
}