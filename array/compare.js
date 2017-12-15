"use strict"

var friends = [
  {name: "john", age: 30},
  {name: "anna", age: 20},
  {name: "chris", age: 25}
];

function comparePerson(a, b){
  if(a.age < b.age){
    return -1;
  }
  if(a.age > b.age){
    return 1;
  }
  return 0;
}

console.log(friends.sort(comparePerson));



var names = ["Ana", "John", "ana", "john"];
names.sort(function(a,b){
  if(a.toLowerCase() < b.toLowerCase()) return -1;
  if(a.toLowerCase() > b.toLowerCase()) return 1;
  return 0;
});
console.log("names sorted: " + names);
