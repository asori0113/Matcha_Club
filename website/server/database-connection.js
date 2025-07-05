/**
 * Makes connection from client to database
 */
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, './.env') });

const uri = process.env.MONGODB_URI

if (!uri) {
  throw new Error('❌ MONGODB_URI is undefined! Check your .env file or dotenv config path.');
}

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