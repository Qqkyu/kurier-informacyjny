import { mapSources } from "./source.controllers.js";
import { Router } from "express";

const router = Router();

router.route("/").get(mapSources);

export default router;
