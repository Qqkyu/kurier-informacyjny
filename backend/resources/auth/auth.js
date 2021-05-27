import bcrypt from "bcrypt";
import User from "./user/user.model.js";
import jwt from "jsonwebtoken";
import refreshTokens from "./token.model.js";

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

const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "10m",
    });
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
            accessToken: accessToken,
            email: user.email,
            refreshToken: refreshToken,
        });
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};

export const isTokenValid = async (token) => {
    return (
        await refreshTokens.findOne({}, { _id: 0, tokens: 1 })
    ).tokens.includes(refreshToken);
};

export const token = async (req, res) => {
    const refreshToken = req.body.token;
    if (refreshToken == null) return res.sendStatus(401);
    if (!isTokenValid(refreshToken)) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        const accessToken = generateAccessToken({ email: user.email });
        res.json({ accessToken: accessToken });
    });
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

export const logout = async (req, res) => {
    await refreshTokens.findOneAndUpdate(
        {},
        { $pull: { tokens: req.body.token } }
    );
    res.status(204).send();
};
