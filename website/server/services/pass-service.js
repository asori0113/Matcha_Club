/**
 * Hashing Service
 * Usable function that hashes and compares passwords
 */

import bcrypt from 'bcrypt';

export async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

export async function comparePassword(candidate, hashed) {
    return bcrypt.compare(candidate, hashed);
}
