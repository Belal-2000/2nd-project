import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

describe('Testing endpoint responses for orders route', () => {
    it('show endpoint /orders/1 [GET] no token', async (done) => {
        const response = await request.get('/orders/1');
        expect(response.status).toBe(401);
        done();
    })
    it('show endpoint /orders/:id [GET] with token', async (done) => {
        const response = await request.get('/orders/1254').set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1OCwiZmlyc3RuYW1lIjoibXJCIiwibGFzdG5hbWUiOiJhd3NvbWVlIiwicGFzc3dvcmQiOiIkMmIkMTAkQm9MZi5hcVJKVDNKNS5HOVRmQ3ZLdVJ3dG9KaVM0NVN0LzIuSk9JWGFIaFFyYTQuSS5ZNHkifSwiaWF0IjoxNjQxNzc1OTg5fQ.khdCXEznepIcAG0TXpJc_vfh7x9XQgwuFUKTp7u0cB4');
        expect(response.status).toBe(200);
        done();
    })
});