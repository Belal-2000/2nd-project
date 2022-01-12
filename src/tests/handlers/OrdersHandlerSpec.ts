import supertest from 'supertest';
import app from '../../server';
import genToken from './UserHandlerSpec';

const request = supertest(app);

describe('Testing endpoint responses for orders route', () => {
    const tokenC = async function createToken(func: Function) {
        const token = await func()
        return token
    }
    const token = tokenC(genToken);

    it('show endpoint /orders/1 [GET] no token', async (done) => {
        const response = await request.get('/orders/1');
        expect(response.status).toBe(401);
        done();
    })
    it('show endpoint /orders/:id [GET] with token', async (done) => {
        const response = await request.get('/orders/1254').set('authorization', 'Bearer '+ await token);
        expect(response.status).toBe(200);
        done();
    })
});