import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        categories: {
            type: Array,
            default: [
                {
                    sources: [1, 2],
                },
                {
                    sources: [0, 3, 5],
                },
                {
                    sources: [4, 6],
                },
            ],
        },
    },
    { timestamps: true }
);

const User = mongoose.model("users", userSchema);
export default User;
