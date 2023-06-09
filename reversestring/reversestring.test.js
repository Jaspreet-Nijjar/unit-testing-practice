const reverseString = require('./reversestring');

describe('reverse string', () => {
  it('should be a function', () => {
    expect(typeof reverseString).toEqual('function');
  });

  it('should return a string', () => {
    expect(typeof reverseString('hello')).toEqual('string');
  });

  it('should return the reverse string', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });
});
