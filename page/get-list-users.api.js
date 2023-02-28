const request = require('supertest');
const env = require('dotenv').config();
const api = request(process.env.BASE_URL_REQRES);

const getListUsers = (payload) =>
    api
        .get('/users')
        .set('Content-Type', 'application/json')
        .query(payload);

module.exports = {
    getListUsers
}