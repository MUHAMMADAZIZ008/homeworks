import express from "express";
import dotenv from "dotenv";
import {authRouter, boartRouter, columnsRouter, usersRouter} from "./routes/index.js"
import { createTables } from "./db/tables.js";
import { connectDatabase } from "./db/db.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/setUp", (req, res) => {
  createTables();
  res.status(201).send("Tables were created");
});
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/columns", columnsRouter);
app.use("/api/board", boartRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Project is running on port:" + port);
  // connect to db
  connectDatabase();
});
