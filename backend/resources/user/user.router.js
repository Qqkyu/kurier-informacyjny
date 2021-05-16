import { Router } from "express";
import { getArticles, changeAssignment } from "./user.controllers.js";

const router = Router();

router.route("/articles").get(getArticles);
router.route("/change_assignment").put(changeAssignment);

export default router;
