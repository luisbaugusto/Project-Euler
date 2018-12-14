/*
Problem [0001]: Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/
const multiplesOf3Or5 = range => [...Array(range).keys()].filter(num => num % 3 === 0 || num % 5 === 0).reduce((acc, num) => acc + num, 0);
console.log(multiplesOf3Or5(1000));

/*
Problem [0002]: Even Fibonacci numbers
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 */
const evenFibonacci = max => {
  let prev = 0;
  let sum = 1;
  let evenSum = 0;

  while (sum + prev <= max) {
    sum += prev;
    prev = sum - prev;

    if (sum % 2 === 0) {
      evenSum += sum;
    }
  }

  return evenSum;
};
console.log(evenFibonacci(4000000));

/*
Problem [0003]: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143?
 */
const isPrime = num => {
  let prime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
};

const largestPrimeFactor = num => {
  let largestFactor = num;
  let maxFactor = Math.floor(num / (num % 2 === 0 ? 2 : 3));
  maxFactor -= maxFactor % 2 === 0 && maxFactor > 2 ? 1 : 0;

  for (let i = maxFactor; i > 1; i -= 2) {
    if (num % i === 0 && isPrime(i)) {
      largestFactor = i;
      break;
    }
  }

  return largestFactor;
};
console.log(largestPrimeFactor(600851475143));
