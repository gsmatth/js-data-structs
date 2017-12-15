"use strict"

function DoublyLinkedList(){

  let Node = function(element){
    this.element = element;
    this.next = null;
    this.prev = null;
  };

  let length = 0;
  let head = null;
  let tail = null;



  this.append = function(element){
    let node = new Node(element);
    let current;

    if(head === null){
      head = node;
      tail = node;
    } else {
      tail.next = node;
      node.prev = tail;
      tail = node;
    }
    length++
  };

  this.insert = function(position, element){
    if(position >= 0 && position < length){
      let node = new Node(element);
      let current = head;
      let previous;
      let index = 0;

      if(position === 0){
        if(!head){
        head = node;
        tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position ===  length){
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        previous.next = node;
        node.prev = previous;
        node.next = current;
        current.prev = node;
      }
      length++;
      return true;

    } else {
      return false;
    }
  };


  this.removeAt = function(position){
    if (position > -1 && position < length){
      let current = head;
      let previous;
      let index = 0;

      if(position === 0){
        //head reference reset to the next node
        head = current.next;
        if(length === 1){
          //since we are removing reference of only node, tail is null
          tail = null;
        } else {
          //if length is greater than 1, the new head needs to have null as prev node
          head.prev = null;
        }
      } else if (position === length - 1){
        //if we are going to remove the reference to the last node
        current = tail;
        //reset the tail to the reference value in current.prev property
        tail = current.prev;
        //now that we have assigned the reference to the node that was previously before the tail, to tail, we need to set the tail.next property value to null
        tail.next = null;
      } else {

        while(index++ < position){
        //iterate through linkedlist until the "previous" variable is assinged reference to the node that is previous to the node we want to remove.  "current" will then reference the object/node we want to remove from the linkedlist
          previous = current;
          //we remove any reference to the "current" node by having the "current" variable reference the node after the "current" node
          current = current.next;
        }
        //assign the reference to teh node after "current" as the next node for previous node, thereby skipping a reference to the current node
        previous.next = current.next;
        //assign the reference to the previous node as the previous node to the node after the current node, removing the final reference to the "current" node and allowing the current node to be garbage collected and "removed"
        current.next.prev = previous;
      }
      length--;
      return current.element;
    } else {
      return null;
    }
  };

  this.indexOf = function(element){
    let current = head;
    let index = 0;

    if(current.element === element){
      return 0;
    }
    index++;

    while(current.next){
      if(element === current.element)
      current = current.next;
      return index++;
    }

  if(element === current.element){
    return index
  }
  return -1;
};

  this.remove = function(element){
    let eIndex = this.indexOf(element);
    return this.removeAt(eIndex);
  };

  this.isEmpty = function(){
    return length === 0;
  };

  this.size = function(){
    return length;
  };

  this.toString = function(){
    let current = head;
    let s = current ? current.element : "";
    while(current && current.next){
      current = current.next;
      s += ", " + current.element;
    }
    return s;
  };

  this.inverseToString = function(){
    let current = tail;
    let s = current ? current.element : "";
    while(current && current.prev){
      current = current.prev;
      s += ", " + current.element;
    }
    return s;
  };

  this.print = function(){
    console.log(this.toString());
  };

  this.printInverse = function(){
    console.log(this.inverseToString());
  };

  this.getHead = function(){
    return head;
  };

  this.getTail = function(){
    return tail;
  };

}


  let list = new DoublyLinkedList();
  list.append("zero");
  list.append("one");
  list.append("two");
  console.log("list to string: " + list.toString());
  list.printInverse();
  console.log("list size: " + list.size());
  console.log("is empty: " + list.isEmpty());
  list.print();
  console.log("head: " + list.getHead());
  console.log("tail: " + list.getTail());
  list.removeAt(1);
  console.log("list to string: " + list.toString());
  list.insert(1, "ten");
  console.log("list to string: " + list.toString());
  list.remove("ten");
  console.log("list to string: " + list.toString());
