import express from 'express';
import { validateSignup } from '../middleware/validation-middleware.js';
import {signup} from '../controllers/auth-controller.js';

const router = express.Router();

//Attaches controller to route handler
router.post('/signup', validateSignup, signup);
//router.post('/login', login);
//router.post('/logout', logout);

application.get('/signup', (request, response) => )

export default router;