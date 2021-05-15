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
        left: {
            type: Array,
            required: true,
            default: ["krytykapolityczna.pl", "oko.press"],
        },
        center: {
            type: Array,
            required: true,
            default: ["tvn24.pl", "polsatnews.pl", "interia.pl"],
        },
        right: {
            type: Array,
            required: true,
            default: ["dorzeczy.pl", "wprost.pl"],
        },
    },
    { timestamps: true }
);

const User = mongoose.model("user", userSchema);
export default User;
