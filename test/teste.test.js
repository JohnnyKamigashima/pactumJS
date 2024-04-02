const Swapi = require('../src/swapi');
const { spec, expect } = require('pactum');
const assert = require('assert');
const swapi = new Swapi();


it('should validate a GET request', async () => {
    const response = await spec()
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .expectStatus(200)
        .expectJsonLike({ 'userId': 1 })
        .toss();
    console.clear()
    console.log(`Title: ${JSON.stringify(response.body.title)}`);
});

it('Should get swapi person', async () => {
    const response = await swapi
        .getPerson(1)
    const data = await response.json()
    // console.log(JSON.stringify(data, null, 4))
    // console.log(data.name)
    // console.log(response.status)
    assert.equal(data.name, 'Luke Skywalker')
    assert.equal(response.status, 200)

})