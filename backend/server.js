import express from "express";
import cors from "cors";
//import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./resources/user/user.router.js";
import { signup, login, verifyToken, logout, token } from "./resources/auth.js";
import {
    getArticles,
    mapSources,
} from "./resources/article/display.articles.js";
var app = express();

//app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

app.post("/signup", signup);
app.post("/login", login);
app.delete("/logout", logout);
app.get("/token", token);
app.get("/articles", getArticles);
app.get("/sources", mapSources);

//app.use(verifyToken);
app.use("/user", userRouter);

dotenv.config();

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
        app.listen(process.env.PORT, () => {
            console.log(
                `API listening on http://localhost:${process.env.PORT}/'`
            );
        });
    } catch (e) {
        console.error(e);
    }
};

start();

export default app;
