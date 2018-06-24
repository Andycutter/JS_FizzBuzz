const { FizzBuzz } = require('./spec.helper')

describe('Fizz Buzz', () => {
    let fizzBuzz = new FizzBuzz
    
    it('returns number if no game rules are met', () => {    
        expect(fizzBuzz.check(1)).to.eql(1)
    })

    it('return fizz if number is divisable by three', () => {
        expect(fizzBuzz.check(3)).to.eql('Fizz')
    })
    it ('returns buzz if number is divisable by five', () => {
        expect(fizzBuzz.check(10)).to.eql('Buzz')
    })
    it ('returns Fizz Buzz if number is divisable by 15', () => {
        expect(fizzBuzz.check(45)).to.eql('Fizz Buzz')
    })

})