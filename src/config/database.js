const knex = require('knex');

require('dotenv').config();

const db = knex({
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'test_db'
    }
});

module.exports = db;
