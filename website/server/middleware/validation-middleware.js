/**
 * Validation Checking middleware, only does parameter checks
 */

const {validateSignupInput} = require('../services/validation-service')
function validateSignup(req, res, next) {
    const error = validateSignupInput(req.body);
    if (error) {
        return res.status(400).json({ error });
    }
    next();
}

module.export = validateSignup;