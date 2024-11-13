import Joi from "joi";

export const articlesSchema = Joi.object({
    title: Joi.string()
        .required()
        .messages({message: "Fill on name!"}),
    content: Joi.string()
        .required()
        .messages({message: "Fill on content!"}),
    author_id: Joi.string()
        .required()
        .messages({message: "Fill on author id!"}),
    category_id: Joi.string()
        .required()
        .messages({message: "Fill on category id!"}),

})