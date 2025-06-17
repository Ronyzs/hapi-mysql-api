const db = require('../config/database');

async function getAllActors() {
    const rows = await db('actor');
    return rows;
}

module.exports = { getAllActors };
