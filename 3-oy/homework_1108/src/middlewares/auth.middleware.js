import jwt from "jsonwebtoken"

export const checkSchema = (schema) =>{
        return (req, res, next) =>{
            try{
                const {error} = schema.validate(req.body)
                if(error){
                    return res.status(400).send({
                        message: error.message
                    })
                }
                next()
            }
            catch(e){
                next(e)
            }
        }
}

export const authGuard = (key) =>{
    return (req, res, next) =>{
        try{
            const token = req.headers.authorization?.split(" ")[1]
            if(!token){
                return res.status(401).send({
                    message: "no token provided"
                })
            }
            const decode = jwt.verify(token, key)
            
            req.user = decode
            next()
        }
        catch(e){
            if (e.name === 'TokenExpiredError') {
                res.status(401).json({ message: "Session expired. Please log in again." });
            } else if (e.name === 'JsonWebTokenError') {
                res.status(403).json({ message: "Invalid token provided" });
            } else {
                res.status(403).json({ message: "Authentication error" });
            }
        }
    }
}

export const roleGuard = (allowedRoles) =>{
    return (req, res, next) =>{
        try{
            const userRole = req.user.role
            if(allowedRoles.includes(userRole)){
                next()
            }else{
                return res.status(403).send({
                    message: "Access denied: insufficient permissions"
                })
            }
        }
        catch(e){
            res.status(403).json({ message: "roleGuard: Invalid or expired token" });
            next(e)
        }
    }
}