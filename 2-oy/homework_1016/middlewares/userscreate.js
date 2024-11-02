export const createMidil = (req,  res, next) =>{
    try{
        let body = req.body
        if(!body.username || !body.password || !body.email){
            res.status(400).send("To'liq kriting")
        }
        if(!body.username.length > 3 || !body.password.length > 5  || !body.age > 10){
            res.status(500).send(`
                username > 3
                passoword > 5
                age > 10
            `)
        }   
        next()
    }
    catch(e){
        res.status(400).send(e.name)
    }
}

export const loginMidil = (req,  res, next) =>{
    try{
        let body = req.body
        if(!body.username || !body.password){
            return res.status(400).send("To'liq kriting")
        }  
        next()
    }
    catch(e){
        return res.status(400).send(e.name)
    }
}

export const profilMidil = (req,  res, next) =>{
    try{
        let username = req.params.username
        if(!username){
            return res.status(400).send("Username yo'q")
        }
        next()
    }
    catch(e){
        return res.status(400).send(e)
    }
}

export const updateProfilMidil = (req,  res, next) =>{
    try{
        let updataUser = req.body
        let username = req.params.username
        if(!username){
            return res.status(400).send("Username yo'q")
        }
        if(!updataUser.username || !updataUser.password){
            res.status(400).send(`Faqat username parol yangilsh mumkin `)
        }

        next()
    }
    catch(e){
        return res.status(400).send(e)
    }
}

export const deleteProfilMidil = (req,  res, next) =>{
    try{
        let username = req.params.username
        if(!username){
            return res.status(400).send("Username yo'q")
        }
        next()
    }
    catch(e){
        return res.status(400).send(e)
    }
}


