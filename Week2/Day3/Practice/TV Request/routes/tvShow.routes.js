import showAll from "../controllers/tvShow.controller.js";
import { Router } from "express";

const router = Router();

router.route("/tvShow/show").get(showAll.allTvShows);
router.route("/tvShow/:yearCreated").get(showAll.showPerYear);
router.route("/tvShow/delete/:tvShow").delete(showAll.delete);
router.route("/tvShow/update/:tvShow").patch(showAll.update);
router.route("/tvShow/insert").post(showAll.insert);

export default router;
