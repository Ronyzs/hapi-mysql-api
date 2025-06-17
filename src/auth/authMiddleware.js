const { verifyToken } = require('./jwt');

async function authMiddleware(request, h) {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return h.response({
            code: 401,
            message: 'Missing or invalid token',
            data: null
        }).code(401).takeover();
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = verifyToken(token);
        request.auth = { credentials: decoded };
        return h.continue;
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return h.response({
                code: 401,
                message: 'Token has expired',
                data: null
            }).code(401).takeover();
        }

        return h.response({
            code: 401,
            message: 'Invalid token',
            data: null
        }).code(401).takeover();
    }
}

module.exports = authMiddleware;
