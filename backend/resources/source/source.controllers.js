import Source from "./source.model.js";
import { incSourceIdValue } from "./counter/counter.controllers.js";

/**
 * @param {number} category_id - 0 left 1 center 2 right
 */
export const getSources = async (category_id) => {
    return await Source.find({
        defaultAssignment: category_id,
    });
};

/**
 * @param {number} category_id - 0 left 1 center 2 right
 */
export const getSourcesNames = async (category_id) => {
    var sources = await getSources(category_id);
    return sources.map(function (source) {
        return source.name;
    });
};

/**
 * @param {String} sourceName
 */
export const removeSource = async (sourceName) => {
    await Source.findOneAndDelete({
        name: sourceName,
    });
};

/**
 * @param {String} sourceName
 * @param {String} sourceUrl
 * @param {number} defaultAssignment - 0, 1 or 2
 * @param {String} description
 */
export const addSource = async (
    sourceName,
    sourceUrl,
    defaultAssignment,
    description = ""
) => {
    try {
        const user = await Source.create({
            _id: await incSourceIdValue(),
            url: sourceUrl,
            description: description,
            name: sourceName,
            defaultAssignment: defaultAssignment,
        });
    } catch (e) {
        console.log(e);
    }
};

/**
 * @param {String} oldName
 * @param {String} newName
 */
export const changeSourceName = async (oldName, newName) => {
    try {
        await Source.updateOne({ name: oldName }, { $set: { name: newName } });
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * @param {Object} req
 * @param {Object} res - object that the object with a list of all sources is sent back to
 */
export const mapSources = async (req, res) => {
    try {
        var sources = await Source.find({});
        sources = sources.reduce((acc, src) => {
            var mappedSrc = {
                logo: `http://localhost:${process.env.PORT}/sources/${src["_id"]}.png`,
                id: src["_id"],
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
        console.log(e);
        res.status(400).send();
    }
};
