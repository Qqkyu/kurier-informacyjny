import bcrypt from "bcrypt";
import User from "../user/user.model.js";
import jwt from "jsonwebtoken";
import refreshTokens from "./token.model.js";

/** The Revealing Module Pattern
 *  some of the token handling functions are hidden from the user
 **/

/**
 * @param {String} user - user's email
 */
const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "10m",
    });
};

/**
 * @param {String} token - token generated for a user by the login function
 */
const isTokenValid = async (token) => {
    return (
        await refreshTokens.findOne({}, { _id: 0, tokens: 1 })
    ).tokens.includes(refreshToken);
};

/**
 * @param {Object} req - contains token that validates if the user is authorized to generate new token
 * @param {Object} res - object that updated token is written to
 */
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

/**
 * @param {Object} req - contains token that validates if the user is authorized to access the next function
 * @param {Object} res - object that the function response is sent to
 * @param {function} next - the function that the user wants to call
 */
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

/**
 * @param {String} token - user's refreshToken generated by the server
 */
const deleteRefreshToken = async (token) => {
    try {
        await refreshTokens.findOneAndUpdate({}, { $pull: { tokens: token } });
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

/**
 * @param {String} password
 */
export const createPassword = async (password) => {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
};

/**
 * @param {Object} req - request body with the user's email and password
 * @param {Object} res - object that the function response is sent to
 */
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

/**
 * @param {Object} req - request body with the user's email and password
 * @param {Object} res - object that the access tokens are sent to
 */
export const login = async (req, res) => {
    try {
        const email = req.body.email;
        const user = await User.findOne({ email: email });
        if (!(await bcrypt.compare(req.body.password, user.password)))
            res.send("incorrect password");
        const accessToken = generateAccessToken({
            email: user.email,
        });
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

/**
 * @param {Object} req - request body with the user's refreshToken
 * @param {Object} res - object that the response is sent to
 */
export const logout = async (req, res) => {
    try {
        var results = await deleteRefreshToken(req.body.token);
        console.log(results);
        if (results) {
            res.status(200).send();
        }
    } catch (e) {
        console.log(e);
        res.status(404).send();
    }
};
