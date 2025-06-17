const { login } = require('./authController');

module.exports = [
    {
        method: 'POST',
        path: '/login',
        handler: login
    }
];
