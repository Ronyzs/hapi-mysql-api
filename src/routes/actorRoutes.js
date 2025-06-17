const actorController = require('../controllers/actorController');

module.exports = [
    {
        method: 'GET',
        path: '/actor',
        handler: actorController.getActors
    }
];