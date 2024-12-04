import userController from "../controllers/user.controller.js";
import { Router } from "express";

const router = Router();

router.route("/user/new").get(userController.createUser);
router.route("/companies/new").get(userController.createComapny);
router.route("/user/company").get(userController.showBoth);

export default router;
