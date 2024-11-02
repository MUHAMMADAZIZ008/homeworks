import { v4 } from "uuid";
import { genSalt, hash, compare } from "bcrypt";
import { readUsersDB, writeUsersDB } from "./db.js";
import path from "node:path";

const dbFilePath = path.join(
  import.meta.dirname,
  "..",
  "database",
  "users.json"
);

const loginFilePath = path.join(
  import.meta.dirname,
  "..",
  "database",
  "login.json"
);

export const createUser = async (user) => {
  const id = v4();
  user.id = id;

  const salt = await genSalt(10);
  const hashPassword = await hash(user.password, salt);
  user.password = hashPassword;

  const users = (await readUsersDB(dbFilePath)) || [];

  users.push(user);

  writeUsersDB(dbFilePath, users);
  delete user.password;
  return user;
};

export const loginUser = async (user) => {
  const { email, password } = user;

  const allUsers = await readUsersDB(dbFilePath);
  const searchData = allUsers.find((item) => item.email === email);
  if (!searchData) {
    return false;
  }

  const isTrue = await compare(password, searchData.password);
  if (!isTrue) {
    return false;
  }

  const allLoginUsers = await readUsersDB(loginFilePath);
  allLoginUsers.push(searchData);

  writeUsersDB(loginFilePath, allLoginUsers);
  return true;
};

export const logoutUser = async (user) => {
  const { email } = user;

  const allUsers = await readUsersDB(loginFilePath);
  console.log(allUsers);

  const allLogins = allUsers.filter((item) => item.email !== email) || [];

  writeUsersDB(loginFilePath, allLogins);
  return true;
};
