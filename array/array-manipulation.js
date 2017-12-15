"use strict"

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.push(11, 12, 13);//add elements to end of array
numbers.unshift(-4, -3, -2);//add elements to beggining of array
console.log(numbers);
numbers.shift();//remove element from beggining of array
console.log(numbers);

numbers.pop(); //remove elements from end of array
console.log(numbers);

numbers.splice(5, 3);//starting with index 5, remove 3 elements
console.log(numbers);

numbers.splice(5, 0, 2, 3, 4);//starting at index 5, remove 0 elements and add elments 2, 3, 4.
console.log(numbers);

numbers.splice(5, 3, 0, 1, 2);//starting at index 5, remove 3 elements and then add 0, 1, and 2
console.log(numbers);

//2 dimensional arrays
var averageTemp = [];
averageTemp[0] = [72, 76, 34, 35, 25, 45];
averageTemp[1] = [56, 43, 33, 12, 23, 45];

for(var i = 0; i < averageTemp.length; i++){
  for(var j = 0; j < averageTemp[i].length; j++){
    console.log(averageTemp[i][j]);
  }
}
console.log(averageTemp);

//3 dimensional arrays
var matrix3x3 = [];
for(var i = 0; i < 3; i++){
  matrix3x3[i] = [];
  for(var j = 0; j < 3; j++){
    matrix3x3[i][j] = [];
    for(var k = 0; k < 3; k++){
      matrix3x3[i][j][k] = i + j + k;
    }
  }
}

for(var i = 0; i < matrix3x3.length; i++){
  for(var j = 0; j < matrix3x3[i].length; j++){
    for(var k = 0; k < matrix3x3[i][j].length; k++){
      console.log(matrix3x3[i][j][k]);
    }
  }
}
console.log(matrix3x3);

var zero = 0;
var positiveNumbers = [1, 2, 3];
var negativeNumbers = [-1, -2, -3];
// var numbers = negativeNumbers.concat(zero, positiveNumbers);
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var isEven = function(x){
  console.log(x);
  return (x % 2 == 0);
}

numbers.every(isEven); //executes the function for each element until false is returned
numbers.some(isEven);//executes the function for each element until a true is returned
numbers.forEach(function(x){
  console.log((x % 2 == 0));
});//executes the function for each element of array, without regard if true or false.  Same as a "for" loop.
//same as above but with fat arrow function:
// numbers.forEach(x => {
// console.log((x % 2 == 0));
//};)

var myMapArray = numbers.map(isEven);//returns a new array containing the returned results after iteratign over each element in the original array.[false, true, false, true, false, true, false, true, false, true, false, true, false, true, false]
console.log(myMapArray);

var evenNumbers = numbers.filter(isEven);//returns a new array containing the elments that the funciton return a true value for.[2, 4, 6, 8, 10, 12, 14]
console.log(evenNumbers);

var sum = numbers.reduce(function(previous, current, index){
  return previous + current;
});//returns a single value after iterating over the complete original array(returns value of 120 in this example).
console.log(sum);

for(let n of numbers){
  console.log((n % 2 == 0) ? "even" : "odd");
  console.log("n: " + n);
}//iterate over numbers array


let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);


let aEntries = numbers.entries();//returns @@iterator which contain key/value pairs
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);


let aKeys = numbers.keys();//returns @@iterator which contains only keys of the arrays
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());

// let aValues = numbers.values();//returns @@iterator which contains aValues
// console.log(aValues.next().value);
// console.log(aValues.next());
// console.log(aValues.next());
// console.log(aValues.next());
// console.log(aValues.next());
// console.log(aValues.next());
//
let numbers2 = Array.from(numbers);//copy an array by creating a new array
console.log("numbers2: " + numbers);

let evens = Array.from(numbers, x => (x % 2 == 0));//create a new array by filtering the "numbers" array and only include even numbers in the new array
console.log("even array: " + evens);
