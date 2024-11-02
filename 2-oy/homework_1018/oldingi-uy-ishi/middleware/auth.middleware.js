import {validateEmail} from "../helpers/email.js"

export const registerMiddleware = (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).send("Email va Password bo'lish shart!")
  }

  if (password.length <= 5) {
    return res.status(401).send("Passwordning uzunligi 5 dan yuqori bo'lishi kerka!")
  }

  if (!validateEmail(email)) {
    return res.status(400).send("Emailda @ bo'ladi")
  }
  next()
}

export const loginMiddlewars = (req, res, next)  =>{
  const {email, passowrd} = req.body
  if(!email || !passowrd){
      return res.status(400).send("email va password bo'lishi shart")
  }
  if(!passowrd.length <= 5){
      return res.status(400).send("password uzunligi 5 dan ko'p bo'lishi kerak")
  }
  if(validateEmail(email)){
      return res.status(400).send("Email yaroqsiz")
  }
  next()

}
