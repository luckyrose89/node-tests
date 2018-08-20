const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call spy correctly', () => {
        spy = expect.createSpy();
        spy('Divya', 28);
        expect(spy).toHaveBeenCalledWith('Divya', 28);
    });

    it('should call saveUser with user object', () => {
        var email = 'divya@example.com';
        var password = 'password';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});