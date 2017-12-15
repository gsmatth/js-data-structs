"use strick"



let Stack = (function(){

  const items = new WeakMap();
  class Stack{
    constructor(){
        console.log("entered Stack constructor");
      items.set(this, []);//Sets the value([]) for the key(this) in the WeakMap object. Returns the WeakMap object.  "this" identifes this stack instance and the array is the data structure for this particular stack.
    }

    push(element){
      let s = items.get(this);//Returns the value associated to the key, or undefined if there is none. "this" would be the key for a specific stack instance and the VALUE of "this" would be the array representing the stack.
      s.push(element);
    }
    pop(){
      let s = items.get(this);
      let r = s.pop();
      return r;
    }
    peek(){
        let s = items.get(this);
        return s[s.length-1];
    }

    isEmpty(){
        return items.get(this).length == 0;
    }

    size(){
        let s = items.get(this);
        return s.length;
    }

    clear(){
        items.set(this, []);
    }

    print(){
        console.log(this.toString());
    }

    toString(){
        return items.get(this).toString();
    }
  }
  return Stack;
})();
