"use strict"

var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b){
  return a - b;
}

console.log('stringArray:', stringArray.join());//returns a string with commas Blue,Humpback,Beluga
console.log('Sorted:', stringArray.sort());//sorts existing array and does NOT make a copy

console.log('numberArray:', numberArray.join());//returns a string with commas 40,1,5,200
console.log('Sorted without a compare function:', numberArray.sort//sorts the original array based on unicode and does NOT make a copy [1, 200, 40, 5]
console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));//sorts the original array numerically and does not make a copy [1, 5, 40, 200]

console.log('numericStringArray:', numericStringArray.join());//returns a string with commas 80,9,700
console.log('Sorted without a compare function:', numericStringArray.sort());//["700", "80", "9"]
console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));//["9", "80", "700"]

console.log('mixedNumericArray:', mixedNumericArray.join());//returns string with commas 80,9,700,40,1,5,200
console.log('Sorted without a compare function:', mixedNumericArray.sort());//[1, 200, 40, 5, "700", "80", "9"]
console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));//[1, 5, "9", 40, "80", 200, "700"]
