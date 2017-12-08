var num = 1;
num = 3;
var price = 1.5;
var name = "Packt";
var trueValue = true;
var nullVal = null;
var und;

console.log("num: " + num);
console.log("name: " + name);
console.log("trueValue: " + trueValue);
console.log("price: " + price);
console.log("nullVar: " + nullVal);
console.log("und: " + und);

var myVariable = "global";
var myOtherVariable = "global";

function myFunction(){
  var myVariable = "local";
  return myVariable;
}

function myOtherFunction(){
  myOtherVariable = "local";
  return myOtherVariable;
}

console.log("myVariable: " + myVariable);
console.log(myFunction());
console.log("myOtherVariable: " + myOtherVariable);
console.log(myOtherFunction());
console.log("myOtherVariable: " + myOtherVariable);
