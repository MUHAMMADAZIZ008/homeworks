import Joi from "joi";

export const commentsSchema = Joi.object({
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