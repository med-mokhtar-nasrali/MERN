import {
	create,
	getAllBooks,
	getOneBook,
	updateOneBook,
	deleteOneBook,
} from "../controllers/books.controller.js";

import { Router } from "express";
const router = Router();

router.route("/books").post(create).get(getAllBooks);
router
	.route("/books/:id")
	.get(getOneBook)
	.put(updateOneBook)
	.delete(deleteOneBook);
export default router;
