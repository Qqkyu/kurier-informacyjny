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
                    category: "left",
                    sources: ["krytykapolityczna.pl", "oko.press"],
                },
                {
                    category: "center",
                    sources: ["tvn24.pl", "polsatnews.pl", "interia.pl"],
                },
                {
                    category: "right",
                    sources: ["dorzeczy.pl", "wprost.pl"],
                },
            ],
        },
    },
    { timestamps: true }
);

const User = mongoose.model("users", userSchema);
export default User;
