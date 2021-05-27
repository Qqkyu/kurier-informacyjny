import bcrypt from "bcrypt";
import User from "../user/user.model.js";
import {
    generateAccessToken,
    deleteRefreshToken,
} from "./token.controllers.js";

export const createPassword = async (password) => {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
};

export const signup = async (req, res) => {
    if (!req.body.email || !req.body.password)
        return res.status(400).send({ message: "need email and password" });
    try {
        const email = req.body.email;
        var hashedPassword = await createPassword(req.body.password);
        const user = await User.create({
            email: email,
            password: hashedPassword,
        });
        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(404).send(e);
    }
};

export const login = async (req, res) => {
    try {
        const email = req.body.email;
        const user = await User.findOne({ email: email });
        if (!(await bcrypt.compare(req.body.password, user.password)))
            res.send("incorrect password");
        const accessToken = generateAccessToken({ email: user.email });
        const refreshToken = jwt.sign(
            user.toJSON(),
            process.env.REFRESH_TOKEN_SECRET
        );
        await refreshTokens.findOneAndUpdate(
            {},
            { $push: { tokens: refreshToken } }
        );
        res.status(200).send({
            token: accessToken,
            email: user.email,
            refreshToken: refreshToken,
        });
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};

export const logout = async (req, res) => {
    if (await deleteRefreshToken(req.body.token)) {
        res.status(200).send();
    }
    res.status(404).send();
};
