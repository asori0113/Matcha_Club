/**
 * User model
 * Defines the schema for users in our application
 * For clarification 
 */

import { ObjectId } from 'mongodb';

class User {
    constructor({
        _id = new ObjectId(), 
        username, 
        email, 
        password, 
        postList = [], 
        hasProfileImage = false, 
        isVerified = false, 
        createdAt = new Date(),
     }) {
        this._id = typeof _id === 'string' ? new ObjectId(_id) : _id;
        this.username = username.trim();
        this.email = email.trim().toLowerCase();
        this.password = password;
        this.postList = postList.map(id => new ObjectId(id));
        this.hasProfileImage = hasProfileImage;
        this.isVerified = isVerified;
        this.createdAt = createdAt;
    }

    //save user instance
    
}

module.exports = User;











/**
 * User model using mongoose
 * I want to use mongodb client for data extraction it helps if I want to integrate tagging and searching
 */

// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const UserSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: [true, 'Username is required'], 
//         trim: true,
//         minlength: [3, 'Username must be at least 3 characters long'], 
//         maxlength: [20, 'Username cannot exceed 20 characters']
//     },
//     email: {
//         type: String,
//         required: [true, 'Please provide a valid email'], 
//         trim: true,
//         lowercase: true, 
//         match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
//     },
//     password: {
//         type: String,
//         required: [true, 'Please provide a valid password'],
//         minlength: [6, 'Password must be at least 6 characters'],
//         maxlength: [20, 'Password cannot exceed 20 characters'],
//     },

//     profileImage: {
//         type: Boolean, 
//         default: false
//     },
//     creationDate: {
//         type: Date,
//         default: Date.now()
//     }

// });

// module.exports = mongoose.model('User', UserSchema);

