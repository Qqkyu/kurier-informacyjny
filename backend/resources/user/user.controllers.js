import User from "./user.model.js";
import { createPassword } from "../auth/auth.js";

/**
 * @param {Object} req - contains user's email, the id of the source that should be updated and the id
 * of the category that the source should be assigned to
 * @res {Object}
 */
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

/**
 * @param {String} email
 */
export const findUser = async (email) => {
    return await User.findOne({ email: email });
};

/**
 * @param {String} email
 */
export const deleteUser = async (email) => {
    try {
        await User.findOneAndRemove({ email: email });
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * @param {String} email
 */
export const updatePassword = async (email) => {
    try {
        await User.updateOne({ email: email });
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * @param {String} email
 * @param {String} password
 */
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
