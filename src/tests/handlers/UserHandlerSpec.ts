import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

describe('Testing endpoint responses for user routes', () => {
    it('create endpoint /users [POST]', async (done) => {
        const response = await request.post('/users').send({
            'firstName': "test1",
            'lastName': "test2",
            'password': "testpass"
        });
        expect(response.status).toBe(200);
        done();
    })
    it('index endpoint /users [GET] when not having token', async (done) => {
        const response = await request.get('/users');
        expect(response.status).toBe(401);
        done();
    });
    it('index endpoint /users [GET] when having token', async (done) => {
        const response = await request.get('/users').set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1OCwiZmlyc3RuYW1lIjoibXJCIiwibGFzdG5hbWUiOiJhd3NvbWVlIiwicGFzc3dvcmQiOiIkMmIkMTAkQm9MZi5hcVJKVDNKNS5HOVRmQ3ZLdVJ3dG9KaVM0NVN0LzIuSk9JWGFIaFFyYTQuSS5ZNHkifSwiaWF0IjoxNjQxNzc1OTg5fQ.khdCXEznepIcAG0TXpJc_vfh7x9XQgwuFUKTp7u0cB4');
        expect(response.status).toBe(200);
        done();
    });
    it('show endpoint /users/1 [GET] when not having token', async (done) => {
        const response = await request.get('/users/1');
        expect(response.status).toBe(401);
        done();
    })
    it('show endpoint /users/1 [GET] when having token ', async (done) => {
        const response = await request.get('/users/1').set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1OCwiZmlyc3RuYW1lIjoibXJCIiwibGFzdG5hbWUiOiJhd3NvbWVlIiwicGFzc3dvcmQiOiIkMmIkMTAkQm9MZi5hcVJKVDNKNS5HOVRmQ3ZLdVJ3dG9KaVM0NVN0LzIuSk9JWGFIaFFyYTQuSS5ZNHkifSwiaWF0IjoxNjQxNzc1OTg5fQ.khdCXEznepIcAG0TXpJc_vfh7x9XQgwuFUKTp7u0cB4');
        expect(response.status).toBe(200);
        done();
    })
});