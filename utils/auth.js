const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// Use a secure and random key for JWT_SECRET. You can generate one using tools like:
// - Node.js: `require('crypto').randomBytes(64).toString('hex')`
// - Online generators: Search for "random hex generator" or "JWT secret generator"
const SALT_ROUNDS = 10;
const JWT_SECRET = '1c8731e7f408078784e3328c50fb0acc5ebd96b65206b979c3d76fce7300c0b7d960b4a772abae5ca073d3b4e9513491dba4fbec1933ce333cb32c87a95b54c6ea4bb8ab87437a18aef213a9bb025c649b66217b9ae94b490883ff1a7558b5dcd4af4fb5afed1da8eca2a660d693a5999df682ffe06f4a52538d79634d8d435d3ed1502974819cb06fa1bf00df9b2711ac6ad80a57894b884ff1350fe06f7b034a491a27eca97df399eef06889d80c85108f71a5c921b7bc475ee82b3cdeddb1817c8121d8c19d366d1aa30ec9504a39af4e9a14505d5a4a49eb5d1529cd4932f55548291ac2af6d91853439c0ddfe417a0e45f32072235b6af0987b3cca0e56'; // Replace with a secure key

// Hash a password
// 'async' makes this function return a Promise, allowing us to use 'await' inside it.
async function hashPassword(password) {
    // 'await' pauses the execution until bcrypt.hash resolves, then returns the result.
    return await bcrypt.hash(password, SALT_ROUNDS);
}

// Compare a password with its hash
// 'async' allows us to use 'await' to handle the asynchronous bcrypt.compare function.
async function comparePassword(password, hash) {
    // 'await' ensures we wait for bcrypt.compare to complete before returning the result.
    return await bcrypt.compare(password, hash);
}

// Generate a JWT token
// This function is synchronous because jwt.sign does not return a Promise.
function generateToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

// Verify a JWT token
// This function is also synchronous because jwt.verify does not return a Promise.
function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

// Example usage: Hash a password
async function exampleHashPassword() {
    const password = 'my_secure_password';
    const hashedPassword = await hashPassword(password);
    console.log('Hashed Password:', hashedPassword);
} 
// Call the example function (for demonstration purposes);
exampleHashPassword(); 
module.exports = {
    hashPassword,
    comparePassword,
    generateToken,
    verifyToken
};
