import User from "./user.model.js";
import Source from "../source/source.model.js";

export const getArticles = async (req, res) => {
    var sources;
    if (!req.body.email) {
        try {
            sources = await Source.find({
                defaultAssignment: req.body.category,
            });
        } catch (e) {
            res.status(400).send();
        }
    } else {
        try {
            var user = await User.findOne({
                email: req.body.email,
            });
            sources = await Source.find({
                name: { $in: user[req.body.category] },
            });
        } catch (e) {
            res.status(400).send();
        }
    }
    res.status(200).send(sources);
};

export const changeAssignment = async (req, res) => {
    if (!req.body.email) res.status(400).send();
    try {
        const ss = await User.deleteOne(
            { email: req.body.email },
            { multi: true, arrayFilters: [{ element: req.body.source }] }
        );
        console.log("tutaj");
        console.log(ss);
        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(400).send();
    }
};
