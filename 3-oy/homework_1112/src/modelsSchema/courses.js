import Joi from "joi";

export const coursesSchema = Joi.object({
    name: Joi.string()
        .required()
        .messages({"message": "Fill on name!"}),
    category_id: Joi.string()
        .required()
        .messages({message: "Fill on category id!"}),
    description: Joi.string()
        .required()
        .messages({"message": "Fill on description!"})
})