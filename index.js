//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function stringReverse (inputString){
    let reverseStr = '';
    for(let i = inputString.length -1; i >=0; i--){
        reverseStr += inputString[i];
    }
    return reverseStr;
}

const input = 'Hello world';
const result = stringReverse(input);
console.log(result);



//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function sumOfNumbers(arr) {
    const numbersSum = arr.reduce((accumulator, currentValue) => {
      if (currentValue > 0) {
        return accumulator + currentValue;
      } else{
        return accumulator;
    }
    }, 0);
  
    return numbersSum;
  }
  

const array = [2, -5, 10, -3, 7];
const inputArr = sumOfNumbers(array)
console.log(inputArr)



//Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

function findMostFrequentElement(arr) {
    if (arr.length === 0) {
      return null; 
    }
  
    const frequencyMap = new Map();
    let mostFrequentElement = arr[0];
    let maxFrequency = 1;
  
    arr.forEach((element) => {
      if (frequencyMap.has(element)) {
        frequencyMap.set(element, frequencyMap.get(element) + 1);
        if (frequencyMap.get(element) > maxFrequency) {
          maxFrequency = frequencyMap.get(element);
          mostFrequentElement = element;
        }
      } else {
        frequencyMap.set(element, 1);
      }
    });
  
    return mostFrequentElement;
  }
  

  const arrayFre = [1, 2, 3, 2, 4, 2, 5, 5, 6, 2];
  const mostFrequent = findMostFrequentElement(array);
  console.log(mostFrequent); 



//Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return null; 
}


const sortedArray = [2, 4, 6, 8, 10];
const targetValue = 12;
const resultNum = findTwoNumbersWithSum(sortedArray, targetValue);
console.log(resultNum); 



//Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join('');
  }
  
  const passwordLength = 8;
  const password = generateRandomPassword(passwordLength);
  console.log( password);



  //Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

  function romanToInteger(romanNumeral) {
    const romanToIntMap = {
      I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };
    
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const current = romanToIntMap[romanNumeral[i]];
      const next = romanToIntMap[romanNumeral[i + 1]];
  
      result += (current < next) ? -current : current;
    }
  
    return result;
  }
  
console.log(romanToInteger("IX")); 
console.log(romanToInteger("XXI")); 



//Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
    arr = Array.from(new Set(arr)).sort((a, b) => a - b);
    return arr[1];
  }
  
const numbersArray = [9, 2, 4, 1, 5, 3];
console.log(findSecondSmallest(numbersArray));
  
  
  




  
