import express, { json } from 'express';
import bookRouter from './routes/bookRoute.js';

const app = express();

app.use(express.json());
app.use("/books",bookRouter);

export default app;