import refreshTokens from "./token.model.js";
import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "10m",
    });
};

export const isTokenValid = async (token) => {
    return (
        await refreshTokens.findOne({}, { _id: 0, tokens: 1 })
    ).tokens.includes(refreshToken);
};

export const getNewToken = async (req, res) => {
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

export const deleteRefreshToken = async (token) => {
    try {
        await refreshTokens.findOneAndUpdate(
            {},
            { $pull: { tokens: req.body.token } }
        );
        return true;
    } catch (e) {
        return false;
    }
};
