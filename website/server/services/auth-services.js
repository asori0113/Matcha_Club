import { ObjectId } from 'mongodb';
import { connectToDB } from '../database-connection.js';
import { hashPassword } from './pass-service.js';


export async function createUser(userData) {
    const db = await connectToDB();
    const users = db.collection('users');
    const hashedPassword = await hashPassword(userData.password);

    const user = {
        _id: new ObjectId(),
        username: userData.username.trim(), 
        email: userData.email.trim().toLowerCase(),
        password: hashedPassword,
        createdAt: new Date(), 
    };

    
    await users.insertOne(user);

    return user._id;
}

export async function findUserByEmail(email) {
    const db = await connectToDB();
    const users = db.collection('users');

    return await users.findOne({ email: email.trim().toLowerCase() });
}
