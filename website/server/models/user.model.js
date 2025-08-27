import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User Name is required'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    email: {
        type: String, 
        required: [true, 'User email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true,
        minLength: 6,

    },
    hasProfileImage: [{
        type: String, 
        imageURL: String
    }],
    pinList: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Pin' 
    }]

}, { timestamps: true })

const User = mongoose.model('User', userSchema);

export default User;