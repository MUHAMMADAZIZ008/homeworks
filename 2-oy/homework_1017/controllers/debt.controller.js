import { checkUser, createDebt, deleteDebtById, getDebt, getDebtById, updataDabt } from "../services/index.js"

export const getAllDebt = (req, res, next) => {
    try{
        let debts = getDebt()
        if(!debts){
            return res.status(404).send("Qarzlar yo'q")
        }
        return res.status(200).json(debts)
    }
    catch(e){
        next(e)
    }
}

export const createDebtController = (req, res, next) => {
    try{
        let newDebt = req.body
        let user = checkUser({
            email: newDebt.email,
            password: newDebt.password
        })
        if(!user){
            return res.status(400).send("foydalanuvchi topilmadi")
        }

        let debts = createDebt(newDebt, user)

        if(!debts){
            return res.status(404).send("Yaratilamdi")
        }
        return res.status(200).json("Yaratildi")
    }
    catch(e){
        next(e)
    }
}


export const updataDebtController = (req, res, next) => {
    try{
        const id = req.params.id
        const newData = req.body
        let chack = updataDabt(id, newData)
        if(!chack){
            return res.status(404).send("Qarz topilmadi!")
        }
        return res.status(200).send("Yangilandi")
    }
    catch(e){
        next(e)
    }
}

export const getDebtByIdController = async(req, res, next) => {
    try{
        const id = req.params.id
        let debt = await getDebtById(id)
        if(!debt){
            return res.status(404).send("Qarz topilmadi!")
        }
        return res.status(200).json(debt)
    }
    catch(e){
        next(e)
    }
}
export const deleteDebtController = async(req, res, next) => {
    try{
        const id = req.params.id
        let debt = await deleteDebtById(id)

        if(!debt){
            return res.status(404).send("Qarz topilmadi!")
        }
        return res.status(200).send("O'chirildi")
    }
    catch(e){
        next(e)
    }
}