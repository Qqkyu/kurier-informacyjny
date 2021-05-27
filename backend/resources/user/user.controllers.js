import User from "./user.model.js";
import { createPassword } from "../auth/auth.js";

export const changeAssignment = async (req, res) => {
    if (!req.body.email) res.status(400).send();
    try {
        await User.update(
            { email: req.body.email },
            {
                $pull: { "categories.$[].sources": req.body.source_id },
            }
        );
        await User.update(
            { email: req.body.email },
            {
                $push: {
                    [`categories.${req.body.category_id}.sources`]:
                        req.body.source_id,
                },
            }
        );
        res.status(200).send();
    } catch (e) {
        res.status(400).send(e);
    }
};

export const findUser = async (email) => {
    return await User.findOne({ email: email });
};

export const deleteUser = async (email) => {
    try {
        await User.findOneAndRemove({ email: email });
        return true;
    } catch (e) {
        return false;
    }
};

export const updatePassword = async (email) => {
    try {
        await User.updateOne({ email: email });
        return true;
    } catch (e) {
        return false;
    }
};

export const resetPassword = async (email, password) => {
    try {
        await User.updateOne(
            { email: email },
            { $set: { password: await createPassword(password) } }
        );
        return true;
    } catch (e) {
        return false;
    }
};
