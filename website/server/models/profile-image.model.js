import mongoose from 'mongoose';

const profileImageSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
        index: true
    },
    data: {
        type: Buffer,
        requred: true
    }, 
    contentType: {
        type: String, 
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const ProfileImage = new mongoose.Schema('ProfileImage', profileImageSchema);
export default ProfileImage;