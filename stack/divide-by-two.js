function divideByTwo(decNum){
  var stack = new Stack();
  var remainder;
  var binaryString = "";

  while(decNum > 0){
    remainder = Math.floor(decNum % 2);
    stack.push(remainder);
    decNum = Math.floor(decNum / 2);
  }

  while(!stack.isEmpty()){
    binaryString += stack.pop().toString();
  }

  return binaryString;
}

console.log(divideByTwo(233));
