const { getPrimeNumber, getMedian } = require('./helper'); 

describe('check with getPrimeNumber', () => {
  it('should return with an array of prime Numbers', async () => {
    const number = 20;
    const result = getPrimeNumber(number);
  expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});

describe('check with getMedian', () => {
  it('should return with an array of median', async () => {
    const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19];
    const result = getMedian(primeNumbers);
    expect(result).toEqual([7, 11]);
  });
});
