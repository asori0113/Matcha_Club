/**
 * Makes connection from client to database
 */
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI

const client = new MongoClient(uri);

let db;

export const connectToDB = async () => {
    if (!db) {
        await client.connect();
        db = client.db('matcha_club')
        console.log('✅ Connected to MongoDB');
    }
    return db;
}

export const getDB = () => db;