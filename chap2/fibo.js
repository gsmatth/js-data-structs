"use strict"

var fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 2;

for(var i = 3; i < 20; i++){
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}

for(var i = 1; i < fibonacci.length; i++){
  console.log(fibonacci[i]);
}

console.log(fibonacci);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.push(11, 12, 13);//add elements to end of array
numbers.unshift(-4, -3, -2);//add elements to beggining of array
console.log(numbers);
numbers.shift();//remove element from beggining of array
console.log(numbers);

numbers.pop(); //remove elements from end of array
console.log(numbers);

numbers.splice(5, 3);//remove 3 items startign with index 5
console.log(numbers);

numbers.splice(5, 0, 2, 3, 4);//starting at index 5, remove 0 elements and add elments 2, 3, 4.
console.log(numbers);

numbers.splice(5, 3, 0, 1, 2);//starting at index 5, remove 3 elements and then add 2, 3, 4
console.log(numbers);
