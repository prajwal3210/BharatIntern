import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import UserModel from "./models/user.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017");

app.post("/", (req, res) => {
  const formData = req.body;
  UserModel.create(formData)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.post("/Login", (req, res) => {
  const formData = req.body;
  UserModel.findOne({ email: formData.email })
    .then((user) => {
      if (user) {
        if (formData.password === user.password) {
          res.json("user found");
        } else {
          res.json("pass wrong");
        }
      } else {
        res.json("no record");
      }
    })
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running...");
});
