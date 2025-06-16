

const connectToDB = require('../database-connection');
const { hashPassword } = require('./hash-service')
const bcrypt = require('bcrypt');

async function createUser(userData) {
    const hashedPassword = await hashPassword(userData.password);

    const user = {
        username: userData.username.trim(), 
        email: userData.email.toLowerCase(),
        password: hashedPassword,
        createdAt: new Date(), 
    };

    const db = await connectToDB();
    const result = await db.collection('users').insertOne(user);

    return result.insertedID;
}


module.exports = { createUser }