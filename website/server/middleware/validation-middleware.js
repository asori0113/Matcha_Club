/**
 * Validation Checking middleware, only does parameter checks
 */

const { userSignupSchema } = require('../models/validation-models/user-validation-model')
function validateSignup(req, res, next) {
    const error = userSignupSchema.validate(req.body, { abortEarly: false});
    
    if (error) {
        const messages = error.details.map((detail) => detail.message);
        return res.status(400).json({ errors: messages });
    }
    next();
}

module.export = validateSignup;