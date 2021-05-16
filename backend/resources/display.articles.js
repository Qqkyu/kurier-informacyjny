import Source from "./source/source.model.js";

export const getDefaultArticles = async (req, res) => {
    try {
        var sources = await Source.find({
            defaultAssignment: req.body.category,
        });
    } catch (e) {
        res.status(400).send();
    }
    res.status(200).send(sources);
};
