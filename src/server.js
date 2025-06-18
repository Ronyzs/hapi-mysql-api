const Hapi = require('@hapi/hapi');

// Routes
const loginRoute = require('./auth/authRoutes');
const actorRoute = require('./routes/actorRoutes');
const authMiddleware = require('./auth/authMiddleware');
const loggingMiddleware = require('./middleware/loggingMiddleware');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: '0.0.0.0'
    });

    // Middleware Logging
    server.ext('onRequest', (request, h) => {
        return loggingMiddleware(request, h);
    });

    // Middleware auth untuk semua route setelah login
    server.ext('onPreHandler', async (request, h) => {
        // Bypass login route
        if (request.path === '/login') return h.continue;

        return authMiddleware(request, h);
    });

    server.route(loginRoute);
    server.route(actorRoute);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

module.exports = init;
