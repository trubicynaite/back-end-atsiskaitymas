import { MongoClient } from "mongodb";

const DB_CONNECTION_STRING = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.${process.env.DB_CLUSTER_ID}.mongodb.net/`;

export const getAllBooks = async (req, res) => {
    const client = await MongoClient.connect(DB_CONNECTION_STRING);
    try {

    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err, message: `Something went wrong with servers, please try again later.` });
    } finally {
        await client.close();
    }
};

export const getBookById = async (req, res) => {
    const client = await MongoClient.connect(DB_CONNECTION_STRING);
    try {

    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err, message: `Something went wrong with servers, please try again later.` });
    } finally {
        await client.close();
    }
};