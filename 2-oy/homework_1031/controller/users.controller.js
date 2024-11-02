import { Users } from "../model/index.js"


export const usersController = async (req, res, next) => {
    try {
        const body = req.body;
        const newUser = await Users(body);
        await newUser.save();
        return res.status(201).send({
            message: "Created",
            data: newUser._id
        });
    } catch (e) {
        next(e);
    }
};

export const getAllusersController = async (req, res, next) => {
    try {
        const allData = await Users.find();
        return res.status(201).send({
            data: allData
        });
    } catch (e) {
        next(e);
    }
};

export const getUsersByIdController = async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await Users.findById(id).select({password: 0});
        if(!user){
            return res.status(404).send({
                status: "User Not Fount"
            });    
        }
        return res.status(200).send({
            status: "Success",
            data: user
        });
    } catch (e) {
        next(e);
    }
};

export const updateUserController = async (req, res, next) => {
    try {
        const id = req.params.id
        const body = req.body
        const updatedUser = await Users.findByIdAndUpdate(id, body)
        return res.status(200).send({
            status: "Success",
            data: updatedUser._id
        });
    } catch (e) {
        next(e);
    }
};

export const deleteUserController = async (req, res, next) => {
    try {
        const id = req.params.id
        await Users.findByIdAndDelete(id)
        return res.status(200).send({
            status: "Success"
        });
    } catch (e) {
        next(e);
    }
};