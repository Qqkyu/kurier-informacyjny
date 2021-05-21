import { Router } from "express";
import { changeAssignment } from "./user.controllers.js";
import { getArticles } from "../article/display.articles.js";

const router = Router();

router.route("/articles").get(getArticles);
router.route("/change_assignment").put(changeAssignment);

export default router;
