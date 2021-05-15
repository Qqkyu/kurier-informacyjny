import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import userRouter from "../backend/resources/user.router.js";
var app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRouter);

dotenv.config();

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
        app.listen(process.env.PORT, () => {
            console.log(
                `API listening on http://localhost:${process.env.PORT}/api'`
            );
        });
    } catch (e) {
        console.error(e);
    }
};

start();

export default app;
