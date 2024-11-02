import fs from "node:fs";

export const readUsersDB = (url) => {
  const data = fs.readFileSync(url, "utf8");

  if (data){
    const users = JSON.parse(data);
    return users;
  } else {
    return [];
  }
};

export const writeUsersDB = (url, users) => {
  fs.writeFileSync(url, JSON.stringify(users));
  return true
};








