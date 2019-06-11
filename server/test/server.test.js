let app = require('../server.js');
let testServer = require('supertest');

describe('Test the root path', () => {
    test('It should respond 200 to the LOGOUT route', async () => {
        const response = await testServer(app).post('/api/user/logout')
        expect(response.statusCode).toBe(200)
    })
})

describe('It should protect the /user route.', () => {
    test('It should respond with not permitted', async () => {
        const response = await testServer(app).get('/api/user')
        expect(response.statusCode).toBe(403)
    })
})

describe('It should protect the /user route.', () => {
    test('It should return user info when logged in', async () => {
        //Agent allows us to remember cookies, contect, etc. for all requests
        let agent = testServer.agent(app)
        const response = await agent
                                 .post('/api/user/login')
                                 .send({, })

        expect(response.statusCode).toBe(200);
                    
        const userResponse = await agent.get('/api/user')
        expect(userResponse.statusCode).toBe(200)
        console.log(userResponse)
    })
})

describe('It should protect the /api/getDogs route', () => {
    test('It should return dog information when logged in', async () => {
        let agent = testServer.agent(app)
        const response = await agent 
                                .post('/api/user/login')
                                .send({})

        expect(response.statusCode).toBe(200);

        const dogResponse = await agent.get('/api/getDogs')
        expect(dogResponse.statusCode).toBe(200)
    })
})

describe('it should protect route and be able to add a dog at /api/addDog route', () => {
    test('it should add dog to DB when logged in', async () => {
        let agent = testServer.agent(app)
        const response = await agent 
                                .post('/api/user/login')
                                .send({})
        expect(response.statusCode).toBe(200)

        const addDog = await agent
                                .post('/api/addDog')
                                .send({dog_name: 'Handsome',
                                       breed: 'Borzoi',
                                       age: '12',
                                       gender: 'Male',
                                       color: 'White with grey',
                                       size: 'Large',
                                       username_id: '3'
                                     })
        expect(addDog.statusCode).toBe(200)
    })
})
