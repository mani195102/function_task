// IIFE AND ANonymous function

// Print odd numbers in an array without an arrow function

let numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let oddNumbers = numbs.filter(function(number) {
    return number % 2 !== 0;
});

console.log(oddNumbers);


(function() {
    let integ = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let oddNumbers = integ.filter(function(number) {
        return number % 2 !== 0;
    });

    console.log(oddNumbers);
})();

// 2. Convert all the strings to title caps in a string array

let stringg = ["hello world", "javascript is fun", "programming"];

let titleCapss = stringg.map(function(str) {
    return str.split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
});

console.log(titleCapss);


(function() {
    let stringah = ["hello world", "javascript is fun", "programming"];

    let TitleCaps = stringah.map(function(str) {
        return str.split(' ').map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
    });

    console.log(TitleCaps);
})();


// 3.Sum of all numbers in an array

let Numbersing = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sums = Numbersing.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sums);


(function() {
    let numbering = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let sumss = numbering.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    console.log(sumss);
})();



// 4. Return all the prime numbers in an array

let Numberss = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let isPrimes = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

let primeNumbers = Numberss.filter(function(num) {
    return isPrimes(num);
});

console.log(primeNumbers);

(function() {
    let integg = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    let isPrime = function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    let primeNumbers = integg.filter(function(num) {
        return isPrime(num);
    });

    console.log(primeNumbers);
})();

// 5.Return all the palindromes in an array


let stringss = ["level", "world", "madam", "javascript", "racecar", "hello"];

let isPalindromes = function(str) {
    return str === str.split('').reverse().join('');
};

let palindromess = stringss.filter(function(str) {
    return isPalindromes(str);
});

console.log(palindromess);

(function() {
    let stringsss = ["level", "world", "madam", "javascript", "racecar", "hello"];

    let isPalindrome = function(str) {
        return str === str.split('').reverse().join('');
    };

    let palindromes = stringsss.filter(function(str) {
        return isPalindrome(str);
    });

    console.log(palindromes);
})();

//6.Return median of two sorted arrays of the same size.

let array1 = [1, 3, 5];
let array2 = [2, 4, 6];

let findMedian = function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2).sort(function(a, b) { return a - b; });
    let mid = mergedArray.length / 2;
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
};

let median = findMedian(array1, array2);
console.log(median); // Output: 3.5


(function() {
    let array1 = [1, 3, 5];
    let array2 = [2, 4, 6];

    let findMedian = function(arr1, arr2) {
        let mergedArray = arr1.concat(arr2).sort(function(a, b) { return a - b; });
        let mid = mergedArray.length / 2;
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    };

    let median = findMedian(array1, array2);
    console.log(median); // Output: 3.5
})();

// 7.Remove duplicates from an array

let array = [1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 8, 9, 9];

let removeDuplicates = function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
};

let uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

(function() {
    let array = [1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 8, 9, 9];

    let removeDuplicates = function(arr) {
        return arr.filter(function(item, index) {
            return arr.indexOf(item) === index;
        });
    };

    let uniqueArray = removeDuplicates(array);
    console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
})();



