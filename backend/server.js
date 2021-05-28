import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./resources/user/user.router.js";
import { signup, login, logout } from "./resources/auth/auth.js";
import { getNewToken, verifyToken } from "./resources/auth/auth.js";
import { getArticles } from "./resources/article/display.articles.js";
import sourceRouter from "./resources/source/source.router.js";

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

app.post("/signup", signup); // {body: {"email": <email_address>, "password": <password>}}
app.post("/login", login); // {body: {"email": <email_address>, "password": <password>}}
app.delete("/logout", logout); // {body: {"token": <refreshToken>}}
app.get("/token", getNewToken); // {body: {"token": <refreshToken>}}
app.get("/articles", getArticles); // {body: {"category_id": <0, 1 or 2>}}
app.get("/sources", sourceRouter); // {}

app.use(verifyToken); // verifyToken function is used before giving access to user's data
app.use("/user", userRouter);

dotenv.config();

// function start connects to the database and starts listening on the port defined in .env file
const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
        app.listen(process.env.PORT, () => {
            console.log(
                `API listening on port http://localhost:${process.env.PORT}/`
            );
        });
    } catch (e) {
        console.error(e);
    }
};

start();

export default app;
