import bcrypt from "bcrypt";
import User from "./user.model.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    if (!req.body.email || !req.body.password)
        return res.status(400).send({ message: "need email and password" });
    try {
        const email = req.body.email;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const user = await User.create({
            email: email,
            password: hashedPassword,
        });
        res.status(200).send({ hashedPassword: hashedPassword });
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
        const accessToken = getAccessToken(user);
        res.json({ accessToken: accessToken, email: user.email });
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};

const getAccessToken = (user) => {
    return jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET);
};

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

export const logout = (req, res) => {
    // delete refreshToken
    res.sendStatus(204);
};
