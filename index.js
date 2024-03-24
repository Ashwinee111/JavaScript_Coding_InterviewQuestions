// 1. How To find duplicate elements in Array ?
const number = [1, 2, 1, 3, 4, 5, 2, 6, 7];
const duplicateNum = number.filter(
  (num, index, arr) => arr.indexOf(num) !== index
); // finde duplicate element
console.log(duplicateNum);
const uniqueNum = number.filter(
  (num, index, arr) => arr.indexOf(num) === index
); // finde unique element
console.log(uniqueNum);

// ========================================================

// 2. How To find max/min number in a given Array ?
const arrNumber = [25, 35, 70, 20, 100, 250];
// <-- 1st method -->
const minNumber = Math.min(...arrNumber);
const maxNumber = Math.max(...arrNumber);
console.log(minNumber);
console.log(maxNumber);
// <-- 2nd method -->
const maxNum = (arr) => arr.reduce((pre, curr) => (pre > curr ? pre : curr));
const max = maxNum(arrNumber);
console.log(max);
const minNum = (arr) => arr.reduce((pre, curr) => (pre < curr ? pre : curr));
const min = minNum(arrNumber);
console.log(min);

// ========================================================

// 3. What is the difference between '==' and '===' operator ?
// <-- "==" is used to compare values -->
const x = 5;
const y = "5";
console.log(x == 5);
// <-- "===" is used to compare both value and dataTypes -->
const a = 5;
const b = "5";
console.log(a === b);

// ========================================================

// 4. How to finde second largest value in array ?
const array = [10, 30, 80, 50, 70, 90];
// <-- 1st method Not recomanded -->
// const sortedArray = array.sort((a, b) => b - a);
// const secondLargest = sortedArray[1];
// console.log("Second largest number:", secondLargest);
// <-- 2nd method -->
const secondLargestNumber = (arr) => {
  let firstLargest = -1;
  let secondLargest = -1;

  arr.forEach((element) => {
    if (element > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = element;
    } else if (element > secondLargest) {
      secondLargest = element;
    }
  });
  return secondLargest;
};
console.log(secondLargestNumber(array));

// ========================================================

// 5. How to find missing elements in a given array ?
const arrNum = [1, 2, 3, 4, 6, 7, 9, 10];
const missArray = [];
const missingElements = (arry) => {
  const minValue = Math.min(...arrNum);
  const maxValue = Math.max(...arrNum);
  for (let i = minValue; i < maxValue; i++) {
    if (arry.indexOf(i) < 0) {
      // if the element is not available in the array then indexOf() method returns -1
      missArray.push(i);
    }
  }
  return missArray;
};
console.log(missingElements(arrNum));

// ========================================================

// 6. How to find even or odd number in a given array ?
const numbers = [1, 2, 3, 8, 9, 10, 11, 12, 5];
const oddNum = numbers.filter((number) => {
  if (number % 2 !== 0) {
    return number;
  }
});
const evenNum = numbers.filter((number) => {
  if (number % 2 == 0) {
    return number;
  }
});
console.log(oddNum);
console.log(evenNum);

// ========================================================

// 7. How to find the sum of all elements in array ?
const arrNums = [1, 9, 6, 4];
const sumNumber = arrNums.reduce((previewsNumber, currentNumber) => {
  return previewsNumber + currentNumber;
});
console.log(sumNumber);

// ========================================================

// // 8. How to find fictorial of a given array ?
const inputNumber = prompt("Enter a number");
let fact = 1;
if (inputNumber < 0) {
  console.log("Fictorial note work on negative numbers");
}
for (let i = 1; i <= inputNumber; i++) {
  fact = fact * i;
  console.log(fact);
}

// ========================================================

// 9. How to find prime numbers ?
// NOTE: Prime Numbers are those which are divide by itself or 1
const primeNumber = prompt("Enter a number");
let isPrime = true;
for (let i = 2; i < primeNumber; i++) {
  if (primeNumber % i == 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log("This is prime number");
} else {
  console.log("This is not prime number");
}

// ========================================================

// 10. how to find vowels from string ?
// <-- Method 1 -->
// const vowels = prompt("Enter your letter");
// if (
//   vowels.toLowerCase() === "a" ||
//   vowels.toLowerCase() === "e" ||
//   vowels.toLowerCase() === "i" ||
//   vowels.toLowerCase() === "o" ||
//   vowels.toLowerCase() === "u"
// ) {
//   console.log("this letter is vowels");
// }else{
//   console.log("This letter is not vowels");
// }
// <-- Method 2 -->
const vowels = prompt("Enter your letter");
const vowelsArray = ["a", "e", "i", "o", "u"];
let count = 0;
for (const letters of vowels.toLowerCase()) {
  if (vowelsArray.includes(letters)) {
    count++;
  }
}
console.log(count);

// ========================================================

// 11. how to reverse a string ?
const reverseString = (str) => {
  let convertedToArray = str.split("");
  convertedToArray.reverse();
  let convertedToString = convertedToArray.join("");
  console.log(convertedToString);
};
reverseString("Ashwinee");

// ========================================================

// 11. how to find palindrome ?
// NOTE: a word, verse, or sentence (such as "madam") or a number (such as 1881) that same backward or forward
let string = prompt("enter sentence");
string = string.toLowerCase();
const palindrome = (str) => {
  let convertedToArray = str.split("").reverse().join("");
  if (convertedToArray === str) {
    return true;
  } 
  else {
    return false;
  }
};
console.log(palindrome(string));

// ========================================================

