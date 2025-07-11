import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: {
        required: [true, 'Subscription name is required'],
        trim: true,
        minLength: 2, 
        maxLength: 100   
    },
    price: {
        type: Number,
        required: [true, 'Subscription price is required'],
        min: [0, 'Price must be greater than 0']
    },
    currency: {
        type: String, 
        enum: ['USD', 'EUR', 'GBP'],
        default: 'USD'
    },
    frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly'],
    },
    category: {
        type: String, 
        enum: ['sports', 'news', 'entertainment', 'lifestyle', 'technology',],
        required: true,
    },
    paymentMethod: {
        tpye: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ['active', 'cancelled', 'expired'],
        default: 'active' 
    }
    
}, { timestamps: true });

const Subscription = mongoose.model('Subscription', subscriptionSchema)

export default Subscription;