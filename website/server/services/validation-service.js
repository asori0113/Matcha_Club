function validateSignupInput({ username, email, password}) {
    if (!username || username.length < 3 || username.length > 20) {
        return 'Username must be between 3 and 20 characthers'
    }
    if (!email || !isEmailValid(email)) {
        return 'Invalid email address';
    }
    if (!password || password.length < 6 || password.length > 20) {
        return 'Password must be between 6 and 20 characters';
    }
    return null; // no errors
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

module.exports = {
    isEmailValid, 
    validateSignupInput,
};