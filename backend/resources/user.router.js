import { Router } from "express";
import { signup, getArticles } from "./user.controllers.js";

const router = Router();

router.route("/signup").post(signup);
//router.route("/login").post(login);
router.route("/articles").get(getArticles);

export default router;
