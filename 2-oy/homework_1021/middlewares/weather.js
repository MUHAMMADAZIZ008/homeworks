export const weatherMiddlewares = (req, res, next) =>{
    let body = req.body
    if(!body.country ||!body.temperature && !body.temperature === 0|| !body.humidity || !body.direction || !body.airPressure || !body.cloudCover){
        return res.status(400).send({
            data : body,
            massage : "To'liq to'ldiring!"
        })
    }
    next()
}