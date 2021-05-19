import User from "./user.model.js";
import Source from "../source/source.model.js";
export const getArticles = async (req, res) => {
    var sources;
    if (!req.body.email) {
        try {
            sources = await Source.find({
                defaultAssignment: req.body.category_id,
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
                _id: {
                    $in: user.categories[req.body.category_id].sources,
                },
            });
        } catch (e) {
            console.log(e);
            res.status(400).send();
        }
    }
    res.status(200).send(sources);
};

export const changeAssignment = async (req, res) => {
    if (!req.body.email) res.status(400).send();
    try {
        await User.update(
            { email: req.body.email },
            {
                $pull: { "categories.$[].sources": req.body.source_id },
            }
        );
        await User.update(
            { email: req.body.email },
            {
                $push: {
                    [`categories.${req.body.category_id}.sources`]:
                        req.body.source_id,
                },
            }
        );
        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(400).send();
    }
};
