import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);
const genToken = async ():Promise<string> => {
    const response = await request.post('/users').send({
        'firstName': "test1",
        'lastName': "test2",
        'password': "testpass"
    });
    return response.body
}

describe('Testing endpoint responses for user routes', () => {
    const tokenC = async function createToken(func: Function) {
        const token = await func()
        return token
    }
    const token = tokenC(genToken);

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
        const response = await request.get('/users').set('authorization', 'Bearer ' +await token);
        expect(response.status).toBe(200);
        done();
    });
    it('show endpoint /users/1 [GET] when not having token', async (done) => {
        const response = await request.get('/users/1');
        expect(response.status).toBe(401);
        done();
    })
    it('show endpoint /users/1 [GET] when having token ', async (done) => {
        const response = await request.get('/users/1').set('authorization', 'Bearer '+await token);
        expect(response.status).toBe(200);
        done();
    })
});

export default genToken;