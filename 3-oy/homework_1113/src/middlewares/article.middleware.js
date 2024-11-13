import { Users } from "../models/authModels.js"
import { Category } from "../models/category.js"

export const idCheck = async (req, res, next) =>{
    try {
        const authorId = req.body.author_id
        const categoryId = req.body.category_id
        const user = await Users.findOne({_id: authorId})
        if(!user){
            return res.status(404).send({
                message: "author not fount"
            })
        }
        const allowedRoles = ["SuperAdmin", "Admin", "Author"]

        if(!allowedRoles.includes(user.role)){
            return res.status(403).send({
                message: "Access denied: insufficient permissions"
            })
        }

        const category = await Category.findOne({_id: categoryId})
        if(!category){
            return res.status(404).send({
                message: "category not fount"
            })
        }
        next()
    } catch (e) {
        next(e)
    }
}