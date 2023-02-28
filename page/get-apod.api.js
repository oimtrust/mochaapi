const request = require('supertest');
const env = require('dotenv').config();
const api = request(process.env.BASE_URL);

const getApod = (payload) =>
    api
        .get('/planetary/apod')
        .set('Content-Type', 'application/json')
        .query(payload);

module.exports = {
    getApod
}