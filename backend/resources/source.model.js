import mongoose from "mongoose";

const sourceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
    },
    articles: {
        type: Array,
        required: true,
        default: [],
    },
});

const Source = mongoose.model("articles", sourceSchema);
export default Source;
