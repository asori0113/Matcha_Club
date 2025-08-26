import mongoose from 'mongoose';

const pinSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, 'Title is required'],
        trim: true,
    }, 
    tags: {
        type: String,
        required: false,
    },
    data: {
        type: Buffer,
        required: true
    },
    contentType: {
        type: String,
        default: Date.now
    }, 
    createdAt: {
        type: Date, 
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    }
});

const Pin = mongoose.model('Pin', pinSchema);

export default Pin;