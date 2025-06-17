const passService = require('../services/pass-service');
const { createUser } = require('./u')
exports.signup = async (req, res) => {
    try {
        const userId = await userService.createUser(req.body);
        res.status(201).json({ userId });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const userID = await userService.setUser(req.body);
        res.status(200).json({ userID })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

exports.logout = async (req, res) => {
    try {
        const userID = await userService.unset(req.body);
        res.status(200).json({ userID })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};