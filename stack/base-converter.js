function baseConverter(decNum, base){

  var stack = new Stack();
  var remainder;
  var numString = "";
  var digits = "0123456789ABCDEF";
  console.log(digits);

  while(decNum > 0){
    console.log("entered first while loop");
    remainder = Math.floor(decNum % base);
    stack.push(remainder);
    decNum = Math.floor(decNum / base);
  }

  while(!stack.isEmpty()){
      console.log("entered second while loop");
    // numString += digits[stack.pop()];
    numString += digits.charAt(stack.pop());
  }
  return numString;

}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
