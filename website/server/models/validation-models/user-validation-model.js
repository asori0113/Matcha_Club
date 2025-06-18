import Joi from 'joi';

export const userSignupSchema = Joi.object( {
    username: Joi.string()
    .trim()
    .min(3)
    .max(20)
    .required()
    .messages( {
        'string.empty': 'Username is required',
        'string.min': 'Username should be at least 3 characters',
        'string.max': 'Username should be at most 30 characters',
    }),

    email: Joi.string()
    .trim()
    .lowercase()
    .email({ tolds: { allow: false } })
    .required()
    .messages({
        'string.empty': 'Email is required',
        'string.email': 'Email must be a valid email address',
    }),

    password: Joi.string()
    .min(8)
    .required()
    .messages({
        'string.empty': 'Password Required',
        'string.password': 'Password should be at least 8 characters long',
    }),
});

module.exports = { userSignupSchema};