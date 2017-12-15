"use strict"

function SetObject(){
  let items = {};

  this.add = function(value){
    if(!this.has(value)){
      //We are adding the value as key and value because it will help us search for the value if we store it as the key as well.
      items[value] = value;
      return true;
    }
    return false;
  };

  this.remove = function(value){
    if(this.has(value)){
        delete items[value];
        return true;
    }
    return false;
  };

  this.has = function(value){
    return items.hasOwnProperty(value);
    //or Object.prototype.hasOwnProperty.call(items, value);
  };

  this.clear = function(){
    items = {};
  };

  this.size = function(){
      return Object.keys(items).length;
  };

  this.sizeLegacy = function(){
    let count = 0;
    for(let key in items){
      if(items.hasOwnProperty(key)){
        count++;
      }
    }
    return count;
  };

  this.values = function(){
    let values = [];
    for(let i = 0, keys = Object.keys(items); i < keys.length; i++){
      values.push(items[keys[i]]);
    }
    return values;
  };

  this.valuesLegacy = function(){
    let values = [];
    for(let key in items){
      if(items.hasOwnProperty(key)){
        values.push(items[key]);
      }
    }
    return values;
  };
  this.union = function(otherSet){
    let unionSet = new SetObject();

    let values = this.values();
    for(let i = 0; i < values.length; i++){
      unionSet.add(values[i]);
    }

    values = otherSet.values()
    for(let i = 0; i < values.length; i++){
      unionSet.add(values[i]);
    }
    return unionSet;
  };

  this.intersection = function(otherSet){
    let intersectionSet = new SetObject();

    let values = this.values();
    for(let i = 0; i < values.length; i++){
      if(otherSet.has(values[i])){
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  };

  this.difference = function(otherSet){
    let differenceSet = new SetObject();

    let values = this.values();
    for(let i = 0; i < values.length; i++){
      if(!otherSet.has(values[i])){
        differenceSet.add(values[i])
      }
    }
    return differenceSet;
  };

  this.subset = function(otherSet){
    let subset = new SetObject();

    if(this.size() > otherSet.size()){
      return false;
    } else {
      let values = this.values;
      for(let i = 0; i < values.length; i++){
        if(!otherSet.has(values[i])){
          return false;
        }
      }
      return true
    }
  };
}

let set = new SetObject();

set.add(1);
console.log("set values: " + set.valuesLegacy());
console.log("set has 1: " + set.has(1));
console.log(set.size());


set.add(2);
console.log("set values: " + set.values());
console.log("set has 2: " + set.has(2));
console.log("set size 2: " + set.size());

set.remove(1);
console.log("set values: " + set.values());
console.log("set has 1: " + set.has(1));
console.log("set size 1: " + set.size());

set.remove(2);
console.log("set values: " + set.values());
console.log("set has 2: " + set.has(2));
console.log("set size 0: " + set.size());


let setA = new SetObject();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new SetObject();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

let unionAB = setA.union(setB);
console.log("union: " + unionAB.values());

let intersectionSetAB = setA.intersection(setB);
console.log("intersection: " + intersectionSetAB.values());

let differenceAB = setA.difference(setB);
console.log("diff: " + differenceAB.values());


let setC = new SetObject();
setB.add(1);
setB.add(2);
setB.add(3);

let setD = new SetObject();
setC.add(2);
setC.add(3);
setC.add(4);

console.log("subset: " + setC.subset(setC));
console.log("subset: " + setC.subset(setD));
