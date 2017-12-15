"use strict"

function Stack(){
  let items = [];

  this.push = function(element){
    items.push(element);
  };
  this.pop = function(){
    return items.pop();
  };
  this.peek = function(){
    return items[items.length - 1];
  };
  this.isEmpty = function(){
    return items.length == 0;
  };
  this.size = function(){
    return items.length;
  };
  this.clear = function(){
    items = [];
  };
  this.print = function(){
    console.log(items.toString());
  };
  this.base = function(){
    return items[0];
  }
}

let stack = new Stack();
stack.print();
console.log("is stack empty: " + stack.isEmpty());
stack.push(5);
stack.push(8);
console.log("top item on stack: " + stack.peek());
stack.push(11);
console.log("stack size: " + stack.size());
console.log("is stack empty: " + stack.isEmpty());
stack.push(15);
stack.pop();
stack.pop();
console.log("stack size: " + stack.size());
stack.print();
console.log("stack base: " + stack.base());
