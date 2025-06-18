import express from 'express';
import validateSignup from '../middleware/validation-middleware';
import authController from '../controllers/auth-controller';

const router = express.Router();

const authController = require('../../controllers/auth-controller');

//Attaches controller to route handler
router.post('/signup', validateSignup, authController.signup);

module.exports = router;