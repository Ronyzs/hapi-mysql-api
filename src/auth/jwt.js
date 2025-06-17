const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'secret_key_default';

function generateToken(user) {
    return jwt.sign({ id: user.id, name: user.name }, SECRET_KEY, {
        expiresIn: '1h'
    });
}

function verifyToken(token) {
    return jwt.verify(token, SECRET_KEY);
}

module.exports = { generateToken, verifyToken };
