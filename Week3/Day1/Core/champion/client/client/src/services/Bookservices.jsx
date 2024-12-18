import axios from "axios"

const http=axios.create({
    baseURL:"http://localhost:8000/api"
})

const  getAllBooks = () =>{
    return http.get('/book')
    .then(res=>res.data)
    .catch(err => {throw err})
}

const  getOneBook = (id) =>{
    return http.get(`/book/${id}`)
    .then(res=>res.data)
    .catch(err => {throw err})
}

const  deleteOneBook = (id) =>{
    return http.delete(`/book/${id}`)
    .then(res=>res.data)
    .catch(err => {throw err})
}

const addBook =(data) =>{
    return http.post('/book',data)
    .then(res=>res.data)
    .catch(err => {throw err})
}

const editBook =(newbook,id) =>{
    return http.put(`/book/${id}`,newbook)
    .then(res=>res.data)
    .catch(err => {throw err})
}



export {
    getAllBooks,
    getOneBook,
    addBook,
    deleteOneBook,
    editBook
}