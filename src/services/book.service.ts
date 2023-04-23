import Book from "../interfaces/Book";
import BookModel from "../models/book.model"
import connection from "../models/connection";

class BookService {
    model:BookModel;

    constructor(){
        this.model = new BookModel(connection);
    }

    async getAll(): Promise<Book[]>{
        const books = await this.model.getAll();
        return books;
    }
}

export default BookService;