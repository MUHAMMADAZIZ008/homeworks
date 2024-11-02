export const getProfileMidileware = (req, res, next) =>{
    let id = req.params.id
    if(!id){
        return res.status(400).send("id bo'lishi shart")
    }
    next()

}

export const updateProfileMidileware = (req, res, next) =>{
    let id = req.params.id
    let body = req.body
    if(!id){
        return res.status(400).send("id bo'lishi shart")
    }
    if(!body.email || !body.password){
        return res.status(400).send("Faqat email yoki parolini o'zgartirish mumkin")
    }
    next()

}


export const deleteProfileMidileware = (req, res, next) =>{
    let id = req.params.id
    if(!id){
        return res.status(400).send("id bo'lishi shart")
    }
    next()

}