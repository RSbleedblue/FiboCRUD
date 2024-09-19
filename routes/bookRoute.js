import { Router } from "express";
import BookController from "../controller/bookController.js";

const bookRouter = Router();
const bookController = new BookController;

bookRouter.get("/books",(req,res)=>bookController.getAllBooks(req,res));
bookRouter.post("/addBook",(req,res) => bookController.addNewBook(req,res));
bookRouter.get("/books/:id",(req,res) => bookController.getBookByID(req,res));
bookRouter.put("/books/:id",(req,res) => bookController.updateBookByID(req,res));
bookRouter.delete("/books/:id",(req,res) => bookController.updateBookByID(req,res));

export default bookRouter;