/** Q#1: Write a function that will take an array as input, sort, and return the array in descending
order. For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2]. */

const bubbleSorting = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};
const arr = [3, 2, 7, 4, 6, 9];
const sortedArray = bubbleSorting(arr);
console.log(sortedArray);


/** Write a function that will take a string as input, check and return if it is palindrome or
not. For example, if the string is “madam” the function should return true and if the string
is “doctor” it should return false. */

const palindrome = (str) => {
    const cleanedStr = str.replace(/\s/g, '');
    const length = cleanedStr.length;
    for (let i = 0; i < length / 2; i++) {
        if (cleanedStr[i] !== cleanedStr[length - 1 - i]) {
            return false;
        }
    }
    return true;
};
console.log(palindrome("madam"));
console.log(palindrome("doctor"));
console.log(palindrome("hello"));

/** Write a function that will take an array as input and return the sum of the two largest
numbers in a n array. For example, in the array [3,7,1,5,11,19] the result would be 30
because 11 and 19 are the largest numbers. */

const sumOfTwoLargestNumbers = (arr) => {
    let largest = arr[0];
    let secondLargest = arr[1];
    if (secondLargest > largest) {
        [largest, secondLargest] = [secondLargest, largest];
    }
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return largest + secondLargest;
};
const inputArray = [3, 7, 1, 5, 11, 19];
const result = sumOfTwoLargestNumbers(inputArray);
console.log(result);

/**Write a function that will take an array as input and return an array with every missing
element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest
entry is 9, and missing numbers are [0,5,8] */

const findMissingNumbers = (arr) => {
    let highestEntry = 0;
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num > highestEntry) {
            highestEntry = num;
        }
    }
    const missingNumbers = [];
    for (let i = 0; i <= highestEntry; i++) {
        let found = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === i) {
                found = true;
                break;
            }
        }
        if (!found) {
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
}
const Array = [3, 4, 9, 1, 7, 3, 2, 6];
const missingNumbers = findMissingNumbers(Array);
console.log(missingNumbers);

/**Write a function that will take an array of numbers and return the number most repeated
in the array with how many times it was repeated. For example, if the array is
[4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 times. */

const findMostRepeatedNumber = (arr) => {
    const frequencyCount = {};
    arr.forEach((num) => {
        if (frequencyCount[num]) {
            frequencyCount[num]++;
        } else {
            frequencyCount[num] = 1;
        }
    });
    let mostRepeatedNumber;
    let maxFrequency = 0;
    for (const num in frequencyCount) {
        if (frequencyCount[num] > maxFrequency) {
            mostRepeatedNumber = num;
            maxFrequency = frequencyCount[num];
        }
    }
    return `${mostRepeatedNumber} is repeated ${maxFrequency} times.`;
}
const array = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];
const results = findMostRepeatedNumber(array);
console.log(results);

/** Write a function that will take an array as input, it will rotate the array to the right 1 time
and return the rotated array. Rotation of the array means that each element is shifted right
by one index. For example, the rotation of array A = [3,8,9,7,6] is [6,3,8,9,7] */

const rotateArrayRight = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const lastIndex = arr.length - 1;
    const lastElement = arr[lastIndex];
    for (let i = lastIndex; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = lastElement;
    return arr;
}
const arr1 = [3, 8, 9, 7, 6];
const rotatedArray = rotateArrayRight(arr1);
console.log(rotatedArray);






