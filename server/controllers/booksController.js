import { MongoClient, ObjectId } from "mongodb";

const DB_CONNECTION_STRING = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.${process.env.DB_CLUSTER_ID}.mongodb.net/`;

const dynamicQuery = (reqQuery) => {
    const filter = {};
    const sort = {};

    const fromYear = parseInt(reqQuery.fromYear);
    const toYear = parseInt(reqQuery.toYear);

    if (!isNaN(fromYear) || !isNaN(toYear)) {
        filter.year = {};
        if (!isNaN(fromYear)) filter.year.$gte = fromYear;
        if (!isNaN(toYear)) filter.year.$lte = toYear;
    }

    if (reqQuery.inStock === 'true') {
        filter.copies = { $gt: 0 };
    }

    if (reqQuery.sortRating === 'asc') {
        sort.rating = 1;
    } else if (reqQuery.sortRating === 'desc') {
        sort.rating = -1;
    }
};

export const getAllBooks = async (req, res) => {
    const client = await MongoClient.connect(DB_CONNECTION_STRING);
    try {
        const settings = dynamicQuery(req.query);
        const data = await client.db('back_end_atsiskaitymas').collection('books').find(settings.filter).sort(settings.filter).toArray();
        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err, message: `Something went wrong with servers, please try again later.` });
    } finally {
        await client.close();
    }
};

export const getBookById = async (req, res) => {
    const client = await MongoClient.connect(DB_CONNECTION_STRING);
    try {
        let filter = {
            _id: ObjectId.createFromHexString(req.params.id)
        };
        const data = await client.db('back_end_atsiskaitymas').collection('books').findOne(filter);
        if (Object.is(data, null)) {
            res.status(404).send({ error: `No book was found using ID ${req.params.id}.` });
            return;
        }
        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err, message: `Something went wrong with servers, please try again later.` });
    } finally {
        await client.close();
    }
};