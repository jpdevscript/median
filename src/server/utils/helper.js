const getPrimeNumber = n => {
  // Eratosthenes algorithm to find all primes under n
  const array = [],
    upperLimit = Math.sqrt(n),
    output = [2];

  // Make an array from 2 to (n - 1)
  for (let i = 0; i < n; i++) {
    array.push(1);
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (let i = 3; i <= upperLimit; i += 2) {
    if (array[i]) {
      for (let j = i * i; j < n; j += i * 2) array[j] = 0;
    }
  }

  // All array[i] set to 1 (true) are primes
  for (let i = 3; i < n; i += 2) {
    if (array[i]) {
      output.push(i);
    }
  }

  return output;
};

const getMedian = values => {
  const len = values.length;
  const half = Math.floor(len / 2);
  if (len % 2) {
    return [values[half]];
  } else {
    return [values[half - 1], values[half]];
  }
};

module.exports = {
  getPrimeNumber,
  getMedian
};
