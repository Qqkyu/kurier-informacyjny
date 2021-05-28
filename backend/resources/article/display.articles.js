import Source from "../source/source.model.js";
import User from "../user/user.model.js";
import { getSources } from "../source/source.controllers.js";
import dotenv from "dotenv";

dotenv.config();

/**
 * @param {Object} req - request body should contain category_id and source_id, optionally user's email
 * @param {Object} res - object that articles are written to
 */
export const getArticles = async (req, res) => {
    var sources;
    if (!req.body.email) {
        try {
            var sources = await getSources(req.body.category_id);
            res.status(200).send(sources);
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

            res.status(200).send(sources);
        } catch (e) {
            res.status(400).send();
        }
    }
};
