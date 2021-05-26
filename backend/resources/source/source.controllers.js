import Source from "./source.model.js";
import { incSourceIdValue } from "./counter/counter.controllers.js";

export const getSources = async (category_id) => {
    return await Source.find({
        defaultAssignment: category_id,
    });
};

export const getSourcesNames = async (category_id) => {
    var sources = await getSources(category_id);
    return sources.map(function (source) {
        return source.name;
    });
};

export const removeSource = async (sourceName) => {
    return await Source.findOneAndDelete({
        name: sourceName,
    });
};

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

export const changeSourceName = async (oldName, newName) => {
    try {
        await Source.updateOne({ name: oldName }, { $set: { name: newName } });
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};
