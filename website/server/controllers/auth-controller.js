import { createUser } from '../services/auth-services.js';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await userService.findUserByEmail(email);
        if (existingUser) {
            return res.status(409).json({ error: 'Email already exist'})
        }

        const userId = await createUser(req.body);
        res.status(201).json({ message: 'User Created', userId });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const login= async (req, res) => {
    try {
        const userID = await userService.setUser(req.body);
        res.status(200).json({ userID })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

export const logout = async (req, res) => {
    try {
        const userID = await userService.unset(req.body);
        res.status(200).json({ userID })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};