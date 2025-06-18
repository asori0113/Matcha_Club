/**
 * Hashing Service
 * Usable function that hashes and compares passwords
 */

import bcrypt from 'bcrypt';

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

async function comparePassword(candidate, hashed) {
    return bcrypt.compare(candidate, hashed);
}

module.exports = {hashPassword, comparePassword};