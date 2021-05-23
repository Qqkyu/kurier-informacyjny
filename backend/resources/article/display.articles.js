import Source from "../source/source.model.js";
import User from "../user/user.model.js";
import { getSources } from "../source/source.controllers.js";

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

            var r = sources.reduce((acc, src) => {
                var mappedSrc = {
                    logo: src["logo"],
                    articles: src["articles"],
                    link: src["link"],
                    name: src["name"],
                    description: src["description"],
                    type:
                        src["defaultAssignment"] == 0
                            ? "Lewica"
                            : src["defaultAssignment"] == 1
                            ? "Centrum"
                            : "Prawica",
                };
                acc[src["name"]] = mappedSrc;
                return acc;
            }, {});

            res.status(200).send(r);
        } catch (e) {
            res.status(400).send();
        }
    }
};

export const mapSources = async (req, res) => {
    try {
        var sources = await Source.find({});
        sources = sources.reduce((acc, src) => {
            var mappedSrc = {
                logo: src["logo"],
                articles: src["articles"],
                link: src["link"],
                name: src["name"],
                description: src["description"],
                type:
                    src["defaultAssignment"] == 0
                        ? "Lewica"
                        : src["defaultAssignment"] == 1
                        ? "Centrum"
                        : "Prawica",
            };
            acc[src["name"]] = mappedSrc;
            return acc;
        }, {});
        res.status(200).send(sources);
    } catch (e) {
        res.status(400).send();
    }
};
