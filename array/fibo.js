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
