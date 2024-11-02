import { createUser, loginUser, logoutUser } from "../services/index.js";

export const registerController = async (req, res, next) => {
  try {
    const newUser = req.body;
    const userData = await createUser(newUser);
    res.status(201).send({
      status: "Created",
      data: userData,
    });
  } catch (error) {
    next(error);
  }
};
export const loginController = async (req, res, next) => {
  try {
    const result = await loginUser(req.body);
    console.log(result);

    if (result) {
      return res.status(200).send("Login is successfully");
    } else {
      throw new Error("Email yoki Parol xato!");
    }
  } catch (error) {
    next(error);
  }
};


export const logoutController = async (req, res, next) => {
  try {
    const result = await logoutUser(req.body);

    if (result) {
      return res.status(200).send("Logout is successfully");
    } else {
      throw new Error("Nimadir xato!");
    }
  } catch (error) {
    next(error);
  }
};
