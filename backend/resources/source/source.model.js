import mongoose from "mongoose";

const sourceSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
    },
    description: {
        type: String,
    },
    articles: {
        type: Array,
        required: true,
        default: [],
    },
    url: {
        type: String,
        required: true,
        maxLength: 150,
    },
    defaultAssignment: {
        type: mongoose.Number,
        required: true,
        enum: [0, 1, 2],
    },
});

const Source = mongoose.model("sources", sourceSchema);
export default Source;
