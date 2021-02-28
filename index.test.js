const axios = require('axios');
const requestServer = require('./requestServer');
const sampleData = require('./data');
const findServer = require("./index");

test("should be defined", () => {
    expect(findServer).toBeDefined();
    expect(requestServer).toBeDefined();
});

test("fetches results from json data", () => {
    const testData = axios.all(sampleData.map(requestServer)).then(reponses => {
        const server = reponses.filter(request => request.online).sort((x, y) => x.priority - y.priority);
        if (server && server.length) {
            return server[0];
        }

    const leastPriorityServer = testData[0].priority;
    return findServer(sampleData).then(response => {
        expect(response).toHaveProperty('online')
        expect(response).toHaveProperty('url')
        expect(response.online).toEqual(true)
        expect(response).toHaveProperty('priority')
        expect(response.priority).toEqual(leastPriorityServer)
    })
})
})

test("show error if no servers are online", async () => {
    let offlineReqArray = [];
    offlineReqArray.push(sampleData[0], sampleData[2]);
    return findServer(offlineReqArray).then(response => {
        expect(() => {
            throw new Error('No server is online');
        }).toThrow();
    })
})