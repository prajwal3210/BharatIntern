import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import UserModel from "./models/user.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

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
          const accessToken = jwt.sign(
            { email: formData.email },
            "jwt-access-token-secret-key",
            { expiresIn: "1m" }
          );
          const refreshToken = jwt.sign(
            { email: formData.email },
            "jwt-refresh-token-secret-key",
            { expiresIn: "5m" }
          );
          res.cookie("accessToken", accessToken, { maxAge: 60000 });
          res.cookie("refreshToken", refreshToken, {
            maxAge: 300000,
            httpOnly: true,
            secure: true,
            sameSite: "strict",
          });
          return res.json({ Login: true });
        } else {
          res.json("pass wrong");
        }
      } else {
        res.json({ Login: false, Message: "no record" });
      }
    })
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running...");
});
