import express from "express";
import mongoose from "mongoose";
import { registerValidation } from "./validations/auth.js";

import checkAuth from "./utils/checkAuth.js";
import {
  register,
  authMe,
  login,
  getAllUsers,
  changeUser,
  getTags,
} from "./controllers/userController.js";

mongoose
  .connect(
    "mongodb+srv://kirill:21277242002@cluster0.ppi0k3j.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB ok");
  })
  .catch((error) => console.log(error));

const app = express();

app.use(express.json());

app.post("/auth/login", login);

app.post("/auth/register", registerValidation, register);

app.get("/auth/me", checkAuth, authMe);
app.patch("/auth/me", checkAuth, changeUser);

app.get("/users", getAllUsers);
app.get("/users/tags", getTags);

const port = process.env.PORT || 4444;

app.listen(port, () => {
  console.log("Server is running");
});
