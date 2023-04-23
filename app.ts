import express from 'express';
import bookRouter from './src/routes/book.routes';

const app = express();

app.use(express.json());

app.use('/books', bookRouter);

export default app;
