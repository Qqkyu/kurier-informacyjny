import { Router } from "express";
import { getArticles } from "./user.controllers.js";

const router = Router();

router.route("/articles").get(getArticles);

export default router;
