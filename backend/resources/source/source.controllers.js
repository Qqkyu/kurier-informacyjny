import { Source } from "./source.model.js";

export const addSource = async (
    sourceName,
    sourceUrl,
    defaultAssignment,
    description = ""
) => {
    try {
        const user = await Source.create({
            _id: 1,
            url: sourceUrl,
            description: description,
            name: sourceName,
            defaultAssignment: defaultAssignment,
        });
    } catch (e) {
        console.log(e);
    }
};
