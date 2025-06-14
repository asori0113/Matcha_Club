/**
 * User model
 * Defines the schema for users in our application
 */

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'], 
        trim: true,
        minlength: [3, 'Username must be at least 3 characters long'], 
        maxlength: [20, 'Username cannot exceed 20 characters']
    },
    email: {
        type: String,
        required: [true, 'Please provide a valid email'], 
        trim: true,
        lowercase: true, 
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please provide a valid password'],
        minlength: [6, 'Password must be at least 6 characters'],
        maxlength: [20, 'Password cannot exceed 20 characters'],
    },

    

})