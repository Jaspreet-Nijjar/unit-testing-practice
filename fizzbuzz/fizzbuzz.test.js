const fizzBuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzBuzz).toEqual('function');
  });

  it('should return the number if it is not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toEqual(1);
  });

  it('should return Fizz', () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
    expect(fizzBuzz(12)).toEqual('Fizz');
  });

  it('should return Buzz', () => {
    expect(fizzBuzz(5)).toEqual('Buzz');
    expect(fizzBuzz(25)).toEqual('Buzz');
  });
});
