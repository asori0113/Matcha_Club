import express from 'express';
import { validateSignup } from '../middleware/validation-middleware.js';
import {signup, login, logout} from '../controllers/auth-controller.js';

const router = express.Router();

//Attaches controller to route handler
router.post('/signup', validateSignup, signup);
router.post('/login', login);
router.post('/logout', logout);

export default router;