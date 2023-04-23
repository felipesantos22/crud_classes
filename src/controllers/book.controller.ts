import { Request, Response } from "express";
import BookService from "../services/book.service";


class BookController{
    bookService: BookService;

    constructor(bookService = new BookService()){
        this.bookService = bookService;   
        this.getAll = this.getAll.bind(this);
    }

    async getAll(_request: Request, response:Response):Promise<void>{
        const books = await this.bookService.getAll();
        response.status(200).json(books);
    }
}

export default BookController;