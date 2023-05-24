const fizzBuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzBuzz).toEqual('function');
  });

  it('should return the number if it is not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toEqual(1);
  });
});
