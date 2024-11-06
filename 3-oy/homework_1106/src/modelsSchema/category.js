import Joi from "joi";

export const categorySchema = Joi.object({
    name: Joi.string()
        .required()
        .messages({"message": "Fill on name!"}),
    description: Joi.string()
        .required()
        .messages({"message": "Fill on description!"})
})