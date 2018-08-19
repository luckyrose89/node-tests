const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('server', () => {
    describe('/', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'todo app v1'         
                    });
                })
                .end(done);
        });
    });
    describe('/users', () => {
        it('should return my users', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude(
                            {
                                name: 'divya',
                                age: 28
                            },
                    );
                })
                .end(done);
        });
    });
});
