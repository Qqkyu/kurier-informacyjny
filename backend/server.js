import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./resources/user/user.router.js";
import { signup, login, logout } from "./resources/auth/auth.js";
import {
    getNewToken,
    verifyToken,
} from "./resources/auth/token.controllers.js";
import {
    getArticles,
    mapSources,
} from "./resources/article/display.articles.js";
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

app.post("/signup", signup);
app.post("/login", login);
app.delete("/logout", logout);
app.get("/token", getNewToken);
app.get("/articles", getArticles);
app.get("/sources", mapSources);

app.use(verifyToken);
app.use("/user", userRouter);

dotenv.config();

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
        app.listen(process.env.PORT, () => {
            console.log("API listening");
        });
    } catch (e) {
        console.error(e);
    }
};

start();

export default app;
