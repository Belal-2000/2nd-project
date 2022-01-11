import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

describe('Testing endpoint responses for products routes', () => {
    it('create endpoint /products [POST] no token', async (done) => {
        const response = await request.post('/products').send({
            'name': "test1",
            'price': 150,
            'category': "catTest"
        });
        expect(response.status).toBe(401);
        done();
    });
    it('create endpoint /products [POST] with token', async (done) => {
        const response = await request.post('/products').send({
            'name': "test1",
            'price': 150,
            'category': "catTest"
        }).set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1OCwiZmlyc3RuYW1lIjoibXJCIiwibGFzdG5hbWUiOiJhd3NvbWVlIiwicGFzc3dvcmQiOiIkMmIkMTAkQm9MZi5hcVJKVDNKNS5HOVRmQ3ZLdVJ3dG9KaVM0NVN0LzIuSk9JWGFIaFFyYTQuSS5ZNHkifSwiaWF0IjoxNjQxNzc1OTg5fQ.khdCXEznepIcAG0TXpJc_vfh7x9XQgwuFUKTp7u0cB4');
        expect(response.status).toBe(200);
        done();
    });
    it('index endpoint /products [GET]', async (done) => {
        const response = await request.get('/products');
        expect(response.status).toBe(200);
        done();
    });
    it('show endpoint /products/1 [GET]', async (done) => {
        const response = await request.get('/products/1');
        expect(response.status).toBe(200);
        done();
    })
});