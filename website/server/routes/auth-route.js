const express = require('express');
const router = express.Router();

const authController = require('../../controllers/auth-controller');

//Attaches controller to route handler
router.POST('/signup', authController.signup);

module.exports = router;