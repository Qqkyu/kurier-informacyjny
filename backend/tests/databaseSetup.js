import mongoose from "mongoose";
import dotenv from "dotenv";
import { deleteUser } from "../resources/user/user.controllers.js";
import { signup } from "../resources/auth/auth.js";
export const connectDatabase = async () => {
    dotenv.config();
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
};

export const closeDatabaseConnection = async () => {
    await mongoose.connection.close();
};

export const createExampleUser = async () => {
    const req = {
        body: { email: "example@gmail.com", password: "passwd" },
    };
    const res = {
        status(status) {
            return this;
        },
        send(result) {},
    };
    await signup(req, res);
};

export const deleteExampleUser = async () => {
    await deleteUser("example@gmail.com");
};
