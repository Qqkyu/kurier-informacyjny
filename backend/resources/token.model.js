import mongoose from "mongoose";

const refreshTokensSchema = new mongoose.Schema({
    tokens: {
        type: Array,
        required: true,
        default: [],
    },
});

const refreshTokens = mongoose.model("tokens", refreshTokensSchema);
export default refreshTokens;
