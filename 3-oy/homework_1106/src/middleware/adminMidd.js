import jwt from "jsonwebtoken"
export function adimCheckMidd(schema, key){
    return (req, res, next) => {
        try{
            if(req.method === "POST"){
                const {error} = schema.validate(req.body)
                if(error){
                    return res.status(400).send({
                        message: error.message
                    })
                }
            }
            const token = req.headers.authorization.split(" ")[1]
            if(!token){
                return res.send({
                    message: "no toket!"
                })
            }
            jwt.verify(token, key, (err, user) =>{
                if(err){
                    return res.send({
                        message: "invalid token!"
                    })
                }
                if(user.role === "Admin"){
                    return res.send({
                        message: "no license!"
                    })
                }
            })
            next()
        }
        catch(e){
            next(e)
        }
    }
}


export function superAdimCheckMidd(key){
    return (req, res, next) => {
        try{

            const token = req.headers.authorization.split(" ")[1]
            if(!token){
                return res.send({
                    message: "no toket!"
                })
            }
            jwt.verify(token, key, (err, user) =>{
                if(err){
                    return res.send({
                        message: "invalid token!"
                    })
                }
                if(user.role !== "SuperAdmin"){
                    return res.send({
                        message: "no license!"
                    })
                }
                next()
            })
            next()
        }
        catch(e){
            next(e)
        }
    }
}