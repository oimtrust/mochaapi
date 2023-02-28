const { expect } = require('chai');
const chai = require('chai');
const assert = require('chai').expect; 
chai.use(require('chai-json-schema'));

const page = require('../page/get-list-users.api');
const schema = require('../schema/get-list-users.schema');

let payload = {
    'page': '2'
};

const testCases = {
    describe: 'As User, I want to see the data of  users',
    positive: {
        validParams: 'Verify the data of users is displayed',
    }
}

describe(`@get ${testCases.describe}`, () => {
    it(`@positive ${testCases.positive.validParams}`, async () => {
        const response = await page.getListUsers(payload);
        assert(response.status).to.equal(200);
        expect(response.body).to.be.jsonSchema(schema.VALID_PARAMS);
    });
});