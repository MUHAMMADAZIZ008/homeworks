import { allDataDb } from "../database/db.js";

export const loginController = async (req, res, next) => {
    try {
        const body = req.body;
        const data = await allDataDb(); 
        
       
        
        let isCheck = false; 
        for (let user of data) {
            if (user.username === body.username && user.password === body.password) {
                isCheck = true;
                break;
            }
        }
        
        if (isCheck) {
            return res.status(200).send({
                message: `Welcome ${body.username}`
            });
        } else {
            return res.status(401).send({
                message: `Not found ${body.username}`
            });
        }
    } catch (e) {
        next(e);
    }
};
