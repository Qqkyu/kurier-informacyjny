import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "./user.model.js";
import Source from "./source.model.js";

const categories = {
    left: ["krytykapolityczna.pl", "oko.press"],
    right: ["dorzeczy.pl", "wprost.pl"],
    center: ["tvn24.pl", "polsatnews.pl", "interia.pl"],
};

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

export const getArticles = async (req, res) => {
    var articles;
    if (!req.body.email) {
        try {
            articles = await Source.find({
                name: { $in: categories[req.body.category] },
            });
        } catch (e) {
            res.status(400).send();
        }
    } else {
        try {
            var user = await User.findOne({
                email: req.body.email,
            });
            articles = await Source.find({
                name: { $in: user[req.body.category] },
            });
        } catch (e) {
            res.status(400).send();
        }
    }
    res.status(200).send(articles);
};

/*
export const login = async (req, res) => {
    try {
        const username = req.body.username
        const user;//find user
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send("Success");
        } else {
        }
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
        res.json({ accessToken: accessToken })

    } catch (e) {
        res.status(500).send();
    }
};

export const autheticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user 
        next()
    })
}

*/
