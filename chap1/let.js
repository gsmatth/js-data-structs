"use strict"

let movie = "lord";

function starWarsFan(){
  let movie = "star";
  return movie;
}

function marvelFan(){
  movie = "avqangers";
  return movie;
}

function blizzardFan(){
  let isFan = true;
  let phrase = "warcraft";
  console.log("Before if: " + phrase);
  if(isFan){
    let phrase = "initial";
    phrase = "for the horde";
    console.log("inside if: " + phrase);
  }
  phrase = "for alliance";
  console.log("after if: " + phrase);
}

console.log(movie);
console.log(starWarsFan());
console.log(marvelFan());
console.log(movie);
blizzardFan();
