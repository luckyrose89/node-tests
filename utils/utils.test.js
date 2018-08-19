const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    
    it('it should add two numbers', () => {
        var res = utils.add(33, 11);
        expect(res).toBe(44).toBeA('number');
    });
    
    it('it should async add two numbers', (done) => {
        utils.asyncAdd(10, 5, (sum) => {
            expect(sum).toBe(15).toBeA('number');
            done();
        });
    });
    
    it('it should square a number', () => {
    
        var a = 12;
        var res = utils.square(a);
    
        expect(res).toBe(a*a).toBeA('number');
    });
    
    it('it should async square a number', (done) => {
        utils.asyncSquare(5, (square) => {
            expect(square).toBe(25).toBeA('number');
            done();
        });
    });

});

it('it should set firstname and lastname', () => {
    var person = {
        age: 28,
        location: 'Delhi'
    };
    var res = utils.setname(person, "Divya Mathur");

    expect(res).toInclude({
        firstName: "Divya",
        lastName: 'Mathur'
    });
});

// it('should do something', () => {
//     // expect(12).toNotBe(11);
//     // expect({name: 'divya'}).toNotEqual({name: 'divya'});
//     // expect([2, 3, 4]).toExclude(5);

// });

