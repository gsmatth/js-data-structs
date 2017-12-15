// the Linkedlist is a list of objects/nodes that reference one another sequentially.  These objects/nodes can be located anywhere in memory, not occupying contigious memory space like an array does.  This is possible because each node has a reference to its next node.  A node does not know its previous node, that is why you always start at the "head" of a linkedlist to conduct operations. The last node of a linkedlist always has "null" value as its "next" property.


function LinkedList(){
  let Node = function(element){
    this.element = element;
    this.next = null;
  }

  let length = 0;//number of items/nodes we have in linkedlist
  let head = null;//reference for the first node in the linkedlist

  this.append = function(element){
    let node = new Node(element);
    var current;

    if(head === null){
      head = node;//set linklist head to refernce of the newly created node object
    } else {
      //get the reference to the first existing node object in linkedlist
      current = head;
      //if the current node has a truthy "next" property value, set "current" to that reference.  This will loop through the linkedlist until current value is set to the last node in the linkedlist
      while(current.next){
        current = current.next;
      }
      //this sets the "next" property for the last node, to reference the new node that you are appending to the Linkedlist
      current.next = node;
    }
    //increment the length of the linkedlist now that you have added a new node
    length++;
  };
  this.removeAt = function(position){
    if(position >  -1 && position < length){
      let current = head;
      var previous;
      var index = 0;

      if(position === 0){
        head = current.next;
      }else{
        //assign reference of the node before the node you want to delete to "previous".  assign reference of the node you want to delete to "current"
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        //change the "next" property value, of the node before the one you want to delete, to the node after the node you want to delete.  This will allow garbage collection to remove the deleted node because it is no longer referenced by any other object.
        previous.next = current.next;
      }
      //reduce the length of the linkedlist because it does not happen automatically
      length--;
    }else {
      return null;
    }
  };
  this.insert = function(position, element){
    if(position >= 0 && position <= length){
      let node = new Node(element);
      var current = head;
      var previous;
      var index = 0;

        if(position === 0){
          node.next = head;
          head = node;
        } else {
            //assign reference of the node before the node you want to insert to "previous".  The node which you will insert the new node before will be assinged to "current"
          while (index++ < position){
            previous = current;
            current = current.next;
          }
          //Inserting a new node between previous node and current node. Assign reference of the "current" node as the next node for the node you are inserting.  Then assign a reference to the newly inserted node as the "next" property of the previous node.
          node.next = current;
          previous.next = node;
        }
        length++;

        return true;

        } else {
          return false;
        }
};

  this.toString = function(){
    let current = head;
    var linkedListString = "";
    while(current){
      linkedListString += current.element + (current.next ? "n" : "");
      current = current.next;
    }
    return linkedListString;
  }

  this.indexOf = function(element){
    current = head;
    index = 0;
    while(current){
      if(current.element === element){
        return index;
      } else {
        index++;
        current = current.next;
      }
    }
        return -1;
  };

  this.remove = function(element){
    var index = this.indexOf(element);
    return this.removeAt(index);
  };


  this.isEmpty = function(){
    return length === 0;
  };

  this.size = function(){
    return length;
  };

  this.getHead = function(){
    return head;
  }
  this.print = function(){};
}

let list = new LinkedList();
list.append(15);
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.append(550);
list.append(60);
list.append(770);
list.append(80);
list.insert(8, 28);
list.removeAt(8);
console.log("toString: " + list.toString());
console.log("index of 770: " + list.indexOf(770));
console.log("size: " + list.size());
console.log("is empty: " + list.isEmpty());
console.log("get head: " + list.getHead());
