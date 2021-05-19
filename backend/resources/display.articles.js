import Source from "./source/source.model.js";

export const getDefaultArticles = async (req, res) => {
    try {
        var sources = await Source.find({
            defaultAssignment: req.body.category_id,
        });
        res.status(200).send(sources);
    } catch (e) {
        res.status(400).send();
    }
};
