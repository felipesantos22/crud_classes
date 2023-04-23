import { Pool, RowDataPacket } from "mysql2/promise";
import Book from "../interfaces/Book";

export default class BookModel {
    connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

    async getAll(): Promise<Book[]> {
        const result = await this.connection.execute('select * from books');
        const [rows] = result;
        return rows as Book[];
    }
}
