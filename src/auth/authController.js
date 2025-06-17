const db = require('../config/database');
const Joi = require('@hapi/joi');
const { generateToken } = require('./jwt');
const crypto = require('crypto');

const login = async (request, h) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    });

    const { error, value } = schema.validate(request.payload);
    if (error) {
        return h.response({
            code: 400,
            message: error.details[0].message,
            data: null
        }).code(400);
    }

    const { username, password } = value;

    try {
        const user = await db('users').where({ username }).first();

        if (!user) {
            return h.response({
                code: 401,
                message: 'Invalid username or password',
                data: null
            }).code(401);
        }

        const match = await hashPassword(password) === user.password;

        if (!match) {
            return h.response({
                code: 401,
                message: 'Invalid username or password',
                data: null
            }).code(401);
        }

        const token = generateToken(user);

        return h.response({
            code: 200,
            message: 'Login success',
            data: {
                token,
                apiKey: process.env.API_KEY
            }
        }).code(200);
    } catch (err) {
        console.error(err);
        return h.response({
            code: 500,
            message: 'Internal server error',
            data: null
        }).code(500);
    }
};

function hashPassword(password) {
    const key = process.env.HASH_KEY || 'default_key';
    const firstMd5 = crypto.createHash('md5').update(password).digest('hex');
    const concatenated = firstMd5 + key;
    const hashed = crypto.createHash('md5').update(concatenated).digest('hex');
    return hashed;
}

module.exports = { login };
