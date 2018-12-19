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
const smallestMultiple = () => {
  let num = 20;
  let smallestMultipleFound = false;

  while (!smallestMultipleFound) {
    let divisibleByAll = true;

    for (let i = 3; i <= 20; i++) {
      if (num % i !== 0) {
        divisibleByAll = false;
        break;
      }
    }

    if (divisibleByAll) smallestMultipleFound = true;
    else num += 20;
  }

  return num;
};

console.time('Problem 5');
console.log(smallestMultiple());
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