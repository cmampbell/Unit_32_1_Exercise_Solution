const {Calculator} = require('./helpers');

const calc = new Calculator()

describe('Tests for mean method', function(){
    test('test proper input', function() {
        expect(calc.mean([1,2,3,4])).toEqual(2.5);
        expect(calc.mean([100,100,100,100])).toEqual(100);
    })

    test('test invalid input', function() {
        expect(calc.mean(['hello'])).toBeNaN();
    })
})

describe('Tests for median method', function(){
    test('test proper input', function() {
        expect(calc.median([1,2,3,4,5])).toEqual(3);
        expect(calc.median([1])).toEqual(1);
    })
})

describe('test for mode method', function(){
    test('test proper input', function() {
        expect(calc.mode([1,1,1,1,4,5,6,7,8,7,7,7,7,10])).toEqual(7)
        expect(calc.mode([1])).toEqual(1)
    })
})