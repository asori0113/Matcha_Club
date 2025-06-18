/**
 * Makes connection from client to database
 */
import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb://localhost:27017/Matcha';
const client = new MongoClient(MONGODB_URI);

let db;

async function connectToDB() {
    if (!db) {
        await client.connect();
        db = client.db('')
    }
    return db;
}

module.exports = connectToDB;