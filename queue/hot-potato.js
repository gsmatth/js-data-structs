"use strict"

function hotPotato(nameList, num){
  let queue = new Queue();
  for(let i = 0; i <nameList.length; i++){
    queue.enqueue(nameList[i]);
  }

  let eliminated = "";
  while(queue.size() > 1){
    for(let i = 0; i < num; i++){
    queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + " was eliminated from the game");
  }
  return queue.dequeue();
}

let names = ["john", "jack", "camila", "ingred", "carl"];
let winner = hotPotato(names, 7);
console.log("The winner was: " + winner);
