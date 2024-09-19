import books from "../util/books.js";

class BookController {
    constructor(){

    }
    // Fetch all Books
    getAllBooks(req,res){
        const data = books;
        return res.status(200).json({message: "Books Loaded Successfully", data : data});
    }
    // Add a new Book
    addNewBook(req,res){
        const {id,title,author,publishedYear, genre} = req.body;
        const data = {id,title,author,publishedYear, genre};
        books.push(data);
        return res.status(200).json({message : "Book added successfully", data : books});
    }
    // Get Book By ID
    getBookByID(req,res){
        const id = req.params.id;
        const data = books.find(book => book.id === id);
        if(data){
            return res.status(200).json({message : "Book Found!", data : data});
        }
        return res.status(404).json({message:"Book not found"});
    }
    // Update the Book by Id
    updateBookByID(req,res){
        const id = req.params.id;
        const data = books.find(book => book.id === id);
        if(!data){
            return res.status(404).json({message:"Book not found"});
        }
        const {title,author,publishedYear,genre} = req.body;
        const updateData = {title,author,publishedYear,genre};
        const index = books.findIndex(book => book.id === id);
        books[index] = updateData;
        return res.status(200).json({message : "Book has been Updated", data : books});
    }
    // Delete Book by its ID
    deleteBookByID(req,res){
        const id = req.params.id;
        const data = books.find(book => book.id === id);
        if(!data){
            return res.status(404).json({message:"Book not found"});
        }
        const index = books.findIndex(book => book.id === id);
        books.splice(index,1);
        return res.status(200).json({message:"Book has been Deleted", data : books});
    }
}
export default BookController;