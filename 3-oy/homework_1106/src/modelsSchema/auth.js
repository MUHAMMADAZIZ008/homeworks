import Joi from "joi";

export const authSchema = Joi.object({
    full_name: Joi.string()
        .min(3).message("Must be more than 3")
        .max(30).message("Must be less than 30")
        .required().messages({message: "Fill on fullname!"}),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required().messages({message: "Fill on email!"}),
    password: Joi.string()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)
        .min(6).message("Must be more than 6")
        .max(40).message("Must be less than 40")
        .required().messages({message: "Fill on password!"}),
    role: Joi.string()
})

export const loginSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required().messages({message: "Fill on email!"}),
    password: Joi.string()
        .min(6).message("Must be more than 6")
        .max(40).message("Must be less than 40")
        .required().messages({message: "Fill on password!"})
})