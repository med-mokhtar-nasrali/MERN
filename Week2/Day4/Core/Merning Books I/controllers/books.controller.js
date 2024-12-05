import Books from "../models/books.model.js";

async function create(req, res) {
	try {
		const newBook = await Books.create(req.body);
		res.json(newBook);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
}

async function getAllBooks(req, res) {
	try {
		const allBooks = await Books.find();
		res.json(allBooks);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
}

async function getOneBook(req, res) {
	try {
		const foundBook = await Books.findById(req.params.id);
		res.json(foundBook);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
}

async function updateOneBook(req, res) {
	const options = {
		new: true,
		runValidators: true,
	};
	try {
		const updatedBook = await Books.findByIdAndUpdate(
			req.params.id,
			req.body,
			options
		);
		res.json(updatedBook);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
}

async function deleteOneBook(req, res) {
	try {
		const deletedBook = await Books.findByIdAndDelete(
			req.params.id
		);
		res.json(deletedBook);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
}

export {
	create,
	getAllBooks,
	getOneBook,
	updateOneBook,
	deleteOneBook,
};
