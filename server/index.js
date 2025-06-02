import e from "express";
import cors from 'cors';
import 'dotenv/config';

const PORT = process.env.PORT || 5501;

const corsOptions = {
    origin: "htpp://localhost:5000"
};

const app = e();

app.use(e.json());
app.use(cors(corsOptions));

app.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`)
});

//ROUTES
app.use('/books', booksRoutes);
