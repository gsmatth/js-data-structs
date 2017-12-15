"use strict"

let Queue = (function(){
  const items = new WeakMap();
  class Queue{
    constructor(){
      items.set(this, []);
    }
    enqueue(element){
      let s = items.get(this);
      s.push(element);
    }
    dequeue(){
      let s = items.get(this);
      let r = s.shift()
      return r;
    }
    front(){
      let s = items.get(this);
      return s[0];
    }
    isEmpty(){
      return items.get(this).length == 0;
    }
    size(){
      return items.get(this).length;
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
  return Queue;
})();

let queue = new Queue;
console.log("is queue empty: " + queue.isEmpty());

queue.enqueue("jonh");
queue.enqueue("jack");
console.log("length: " + queue.size());
queue.enqueue("camila");
queue.print();
console.log("is empty: " + queue.isEmpty());
queue.dequeue();
queue.dequeue();
console.log("length: " + queue.size());
