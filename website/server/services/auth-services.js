const { ObjectId } = require('mongodb');
const connectToDB = require('../database-connection');
const { hashPassword } = require('./pass-service')


async function createUser(userData) {
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

async function findUserByEmail(email) {
    return await User.findOne({ email });
}


module.exports = { createUser, findUserByEmail };