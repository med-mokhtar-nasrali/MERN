import Books from "../models/books.module.js";

const BooksController={
    creat: async(req,res)=>{
        try{
            const newBook=await Books.create(req.body)
            res.json(newBook)
        }catch(err){
            console.log(err);
            res.status(400).json(err)
            
        }
    },
    ReadAll: async (req, res) => {
        try {
            const AllBooks = await Books.find()
            res.json(AllBooks)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    ReadOne: async (req, res) => {
        try {
            const book = await Books.findById(req.params.id)
            res.json(book)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    update: async (req, res) => {
        const options = {
            new: true,
            runValidators: true
        }
        try {
            const editBook = await Books.findByIdAndUpdate(req.params.id, req.body, options)
            res.json(editBook)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    Delete: async (req, res) => {
        try {
            const Deletebokk = await Books.findByIdAndDelete(req.params.id)
            res.json({ response: " book has been deleted " })
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    }
} 

export default BooksController