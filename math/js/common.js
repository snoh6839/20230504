console.log("-- Math.ceil(3.33) --");
console.log( "ceil (올림) : " + Math.ceil(3.33) );
console.log("-- Math.round(3.33) --");
console.log("round (반올림) : " + Math.round(3.33));
console.log("-- Math.floor(3.33) --");
console.log("floor (버림) : " + Math.floor(3.33));

console.log("\n-- Math.random( ) --");
console.log("random (0~1 사이 랜덤) : " + Math.random( ));

let randomNum = Math.random() * 10
if(randomNum > 0 ){
  console.log("1~10 사이 랜덤 : " + Math.ceil(randomNum));
}
console.log("1~10 사이 랜덤 : " + (Math.floor(Math.random() * 10) + 1));
