const chai = require('chai');
const assert = require('chai').expect; 
chai.use(require('chai-json-schema'));

const page = require('../page/get-apod.api');
const schema = require('../schema/get-apod-valid.schema.json');

let payload = {
    'start_date': '2023-01-01',
    'end_date': '2023-02-28',
    'api_key': process.env.API_KEY
};

const testCases = {
    describe: 'As User, I want to see the data of  Astronomy Picture of the Day',
    positive: {
        validParams: 'Verify the data of APOD is displayed',
    },
    negative: {
        invalidParams: 'Ensure the data is no available when the user input invalid parameter'
    }
}

describe(`@get ${testCases.describe}`, () => {
    it(`@positive ${testCases.positive.validParams}`, async () => {
        const response = await page.getApod(payload);
        assert(response.status).to.equal(200);
        // assert(response.body).to.be.jsonSchema(schema);
    });
    
    it(`@negative ${testCases.negative.invalidParams}`, async () => {
        payload.end_date = '2023-db-23'
        const response = await page.getApod(payload);
        assert(response.status).to.equal(400);
    });
});