import Subscription from '../models/subscription.model.js';

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create( {
            ...req.body,
            user: req.user._id,

        })
        
        res.status(201).json({ success: true, data: subscription});
    } catch(error) {
        next(error);
    }
}

export const getUserSubscriptions = async (req, res, next) => {
    try {

        if (req.user._id !== req.params._id) {
            const error = new Error('You are not the owner of this account');
            error.status = 401;
            throw error;

        }
        const subscriptions = await Subscription.find({user: req.params._id});

        res.status(200).json({ success: true, data: subscriptions});
    } catch(error) {
        next(error);
    }
}

export const getUserSubscription = async(req, res, next) => {
    try {
        const subscription = await Subscription.findById(req.params.id);
        
        res.status(201).json({ success: true, data: subscription});
    } catch(error) {

    }
}