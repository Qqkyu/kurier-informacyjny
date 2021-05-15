import { Router } from "express";
import { signup } from "./user.controllers.js";

const router = Router();

router.route("/signup").post(signup);
//router.route("/login").post(login);
//router.route("/articles/:category").get(getArticles);

export default router;
