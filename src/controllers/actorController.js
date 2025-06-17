const Actor = require('../models/actorModel');

const getActors = async (request, h) => {
    try {
        const actors = await Actor.getAllActors();
        return h.response({
            code: 200,
            message: 'Success',
            data: actors
        });

    } catch (err) {
        console.error(err);
        return h.response({
            code: 500,
            message: 'Failed to get actors',
            data: null
        }).code(500);
    }
};

module.exports = { getActors };
