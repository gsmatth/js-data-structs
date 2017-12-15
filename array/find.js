"use strict"

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, 26];
function multipleOf13(element, index, array){
  return (element % 13 == 0) ? true: false;
}

console.log(numbers.find(multipleOf13));//returns the value 13
console.log(numbers.findIndex(multipleOf13));//returns the index 12 becasue that is where the first value that evaluates to true is located
console.log(numbers.includes(11));//returns true, because array includes value of 11
console.log(numbers.includes(30));//returns false
console.log(numbers.includes(26, 10));//returns true because it will find the value 26 after index 10
console.log(numbers.toString());
console.log(numbers.toString(",  "))
