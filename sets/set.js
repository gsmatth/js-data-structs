"use strict"

let set = new Set();
set.add(1);
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
set.add(6);
set.add(7);

for(var v of set){
  console.log(v);
}
//values method returns an Iteratory not an array
console.log("set.values(): " + set.values());
console.log("set.has(): " + set.has(2));
console.log("set.size: " + set.size);
set.delete(6);
console.log("set.values(): " + set.values());
console.log("set.has(): " + set.has(6));
console.log("set.size: " + set.size);
