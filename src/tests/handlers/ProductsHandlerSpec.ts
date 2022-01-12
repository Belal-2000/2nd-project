import supertest from 'supertest';
import app from '../../server';
import genToken from './UserHandlerSpec';

const request = supertest(app);

describe('Testing endpoint responses for products routes', () => {
    const tokenC = async function createToken(func: Function) {
        const token = await func()
        return token
    }
    const token = tokenC(genToken);
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
        }).set('authorization', 'Bearer '+ await token);
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