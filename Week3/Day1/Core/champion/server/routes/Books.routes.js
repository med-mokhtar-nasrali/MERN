import BooksController from "../controllers/books.controller.js";
import{Router} from "express"

const router= Router()

router.route("/book")
    .post(BooksController.creat)
    .get(BooksController.ReadAll)

router.route("/book/:id")
    .get(BooksController.ReadOne)
    .put(BooksController.update)
    .delete(BooksController.Delete)


export default router