function PriorityQueue(){
  let items = [];

  function QueueElement(element, priority){
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function(element, priority){
    let queueElement = new QueueElement(element, priority);
    let added = false;
    for(let i = 0; i < items.length; i++){
      if(queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    if(!added){
      items.push(queueElement);
    }
  };

  this.dequeue = function(){
    let dequeuedElement = items.shift();
    return "priority: " + dequeuedElement.priority + " element: " + dequeuedElement.element;
  };

  this.frontElement = function(){
    return items[0].element;
  };

  this.frontPriority = function(){
    return items[0].priority;
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
    for(let i = 0; i < items.length; i++){
      console.log(items[i].element + " " + items[i].priority);
    }
  };

  this.toString = function(){
    return items.toString();
  };
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("john", 2);
priorityQueue.enqueue("jack", 1);
priorityQueue.enqueue("camila", 1);
priorityQueue.print();
console.log("items element " + priorityQueue.frontElement());
console.log("items element " + priorityQueue.frontPriority());
console.log("items: " + priorityQueue.toString());
console.log("element dequeued: " + priorityQueue.dequeue());
priorityQueue.print();
