// arrow functions task

// 1. Print odd numbers in an array:

const printOddNumbers = (arr) => {
    arr.forEach(num => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  printOddNumbers(numbers);

  // 2.Convert all the strings to title caps in a string array:

  const titleCaps = (str) => {
    return str.toLowerCase().split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  };
  
  // Example usage:
  const strings = ['hello world', 'javascript is awesome', 'openai is cool'];
  const titleCasedStrings = strings.map(titleCaps);
  console.log(titleCasedStrings);

  // 3.Sum of all numbers in an array:

  const sumArray = (arr) => {
    return arr.reduce((total, num) => total + num, 0);
  };
  
  // Example usage:
  const Numbers = [1, 2, 3, 4, 5];
  const sum = sumArray(Numbers);
  console.log("Sum:", sum);

  // 4.Return all the prime numbers in an array:

  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true; // 2 is a prime number
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  const getPrimeNumbers = (arr) => {
    return arr.filter(num => isPrime(num));
  };
  
  // Example usage:
  const Numbes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primes = getPrimeNumbers(Numbes);
  console.log("Prime numbers:", primes);

  // 5.Return all the palindromes in an array:

  const isPalindrome = (str) => {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  };
  
  const getPalindromes = (arr) => {
    return arr.filter(word => isPalindrome(word));
  };
  
  // Example usage:
  const words = ['madam', 'racecar', 'hello', 'level', 'world'];
  const palindromes = getPalindromes(words);
  console.log("Palindromes:", palindromes);
  
  
  
  
