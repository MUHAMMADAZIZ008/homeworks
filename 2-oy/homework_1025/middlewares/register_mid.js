import { validateEmail, validatePassword } from "../check/check.js";
import { allDataDb } from "../database/db.js";

export const registerMiddleware = async (req, res, next) => {
    try {
        let body = req.body;

        if (!body.username || !body.password || !body.email) {
            return res.status(400).send({
                message: "Full introduction" 
            });
        }

        let isCheck = false;
        let data = await allDataDb();

        for (let user of data) {
            if (user.username === body.username || user.email === body.email) {
                isCheck = true;
                break;
            }
        }

        if (isCheck) {
            return res.status(400).send({
                message: "Such a username or email exists!"
            });
        }

        let chack_email = validateEmail(body.email);
        if (!chack_email) { 
            return res.status(400).send({
                message: "Email was entered incorrectly"
            });
        }

        let chack_ps = validatePassword(body.password); 
        if (!chack_ps) {
            return res.status(400).send({
                message: `
                password will be:
                    1. 8 characters
                    2. Capital letters
                    3. Small letters
                    4 special characters 
                `
            });
        }

        next();
    } catch (e) {
        next(e); 
    }
};
