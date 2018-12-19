/*
Problem [001]: Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/
const multiplesOf3Or5 = range => [...Array(range).keys()].filter(num => num % 3 === 0 || num % 5 === 0).reduce((acc, num) => acc + num, 0);

console.time('Problem 1');
console.log(multiplesOf3Or5(1000));
console.timeEnd('Problem 1');

/*
Problem [002]: Even Fibonacci numbers
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

console.time('Problem 2');
console.log(evenFibonacci(4000000));
console.timeEnd('Problem 2');

/*
Problem [003]: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143?
 */
const largestPrimeFactor = (num, count = 2) => {
  while (count < num) {
    while (num % count === 0) {
      num = num / count;
    }

    count++;
  }

  return num;
};

console.time('Problem 3');
console.log(largestPrimeFactor(600851475143));
console.timeEnd('Problem 3');

/*
Problem [004]: Largest palindrome product
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
 */
const largestPalindrome = () => {
  let palindrome = 0;

  for (let x = 999; x > 99; x--) {
    for (let y = 999; y > 99; y--) {
      const product = x * y;
      if (product < palindrome) break;

      const reverseProduct = product.toString().split('').reverse().join('');

      if (product === Number(reverseProduct)) {
        palindrome = product;
        break;
      }
    }
  }

  return palindrome;
};

console.time('Problem 4');
console.log(largestPalindrome());
console.timeEnd('Problem 4');

/*
Problem [005]: Smallest multiple
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */
const smallestMultiple = maxMultiple => {
  let num = maxMultiple;
  let smallestMultipleFound = false;

  while (!smallestMultipleFound) {
    let divisibleByAll = true;

    for (let i = 3; i <= maxMultiple; i++) {
      if (num % i !== 0) {
        divisibleByAll = false;
        break;
      }
    }

    if (divisibleByAll) smallestMultipleFound = true;
    else num += maxMultiple;
  }

  return num;
};

console.time('Problem 5');
console.log(smallestMultiple(20));
console.timeEnd('Problem 5');

/*
Problem [006]: Sum square difference
The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */
const sumSquareDiff = max => {
  let sum = 0;
  let squareSum = 0;

  for (let i = 1; i <= max; i++) {
    sum += i;
    squareSum += i * i;
  }

  return sum * sum - squareSum;
};

console.time('Problem 6');
console.log(sumSquareDiff(100));
console.timeEnd('Problem 6');

/*
Problem [007]: 10001st prime
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?
 */
const findPrime = num => {
  const prime = {
    index: 0,
    number: 1
  };

  while (prime.index < num) {
    prime.number++;
    let isPrime = true;

    for (let x = 2; x < prime.number; x++) {
      if (prime.number % x === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) prime.index++;
  }

  return prime.number;
};

console.time('Problem 7');
console.log(findPrime(10001));
console.timeEnd('Problem 7');

/*
Problem [008]: Largest product in a series
The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.

Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
 */
const largestProduct = (num, len) => {
  let largestProduct = 0;
  const numArray = num.split('');

  numArray.forEach((digit, index) => {
    if (index + len > num.length) return;
    const product = numArray.slice(index, index + len).reduce((acc, d) => acc * d, 1);
    largestProduct = Math.max(product, largestProduct);
  });

  return largestProduct;
};

console.time('Problem 8');

const num =
  '73167176531330624919225119674426574742355349194934' +
  '96983520312774506326239578318016984801869478851843' +
  '85861560789112949495459501737958331952853208805511' +
  '12540698747158523863050715693290963295227443043557' +
  '66896648950445244523161731856403098711121722383113' +
  '62229893423380308135336276614282806444486645238749' +
  '30358907296290491560440772390713810515859307960866' +
  '70172427121883998797908792274921901699720888093776' +
  '65727333001053367881220235421809751254540594752243' +
  '52584907711670556013604839586446706324415722155397' +
  '53697817977846174064955149290862569321978468622482' +
  '83972241375657056057490261407972968652414535100474' +
  '82166370484403199890008895243450658541227588666881' +
  '16427171479924442928230863465674813919123162824586' +
  '17866458359124566529476545682848912883142607690042' +
  '24219022671055626321111109370544217506941658960408' +
  '07198403850962455444362981230987879927244284909188' +
  '84580156166097919133875499200524063689912560717606' +
  '05886116467109405077541002256983155200055935729725' +
  '71636269561882670428252483600823257530420752963450';

console.log(largestProduct(num, 13));
console.timeEnd('Problem 8');