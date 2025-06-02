import e from "express";
import cors from 'cors';
import 'dotenv/config';

import booksRoutes from './routes/booksRoutes.js'

const PORT = process.env.PORT || 5501;

const corsOptions = {
    origin: "http://localhost:5173"
};

const app = e();

app.use(e.json());
app.use(cors(corsOptions));

app.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`)
});

//ROUTES
app.use('/books', booksRoutes);
