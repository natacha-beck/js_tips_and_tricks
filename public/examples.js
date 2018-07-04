
// Example 1 hoisting (both example are equivalent)

function doubleSumOfSquares(a,b){
  var x = add(a * a, b * b);

  x = x * 2;
  return x;

  function add(c,d){
      return c + d;
  }
}

function doubleSumOfSquares(a,b){
  var x = undefined;

  function add(c,d){
      return c + d;
  }

  x = add(a * a, b * b);
  x = x * 2;
  return x;
}


// Example 2 hoisting

function randomOneToTen(){
  return Math.floor((Math.random() * 10) + 1);
}

function randomElevenToTwenty(){
  return Math.floor((Math.random() * 10) + 11);
}


// Calling randomGenerator will return a number between 11 and 20 
function randomGenerator(){

  function mysteryRandom(){
    return randomOneToTen();
  }

  return mysteryRandom();

  function mysteryRandom(){
    return randomElevenToTwenty();
  }
}


function randomGenerator(){

  function mysteryRandom(){
    return randomOneToTen();
  }

  function mysteryRandom(){
    return randomElevenToTwenty();
  }

  return mysteryRandom();
}

// Example 3 with function expression

function randomGenerator(){

  var mysteryRandom = function(){
    return randomOneToTen();
  }

  return mysteryRandom();

  var mysteryRandom = function(){
    return randomElevenToTwenty();
  }

}

function randomGenerator(){

  var mysteryRandom = undefined;
  var mysteryRandom = undefined;

  mysteryRandom = function(){
    return randomOneToTen();
  }

  return mysteryRandom();

  var mysteryRandom = function(){
    return randomElevenToTwenty();
  }

}

// Example 4

function randomGenerator(){

  return mysteryRandom();

  var mysteryRandom = function(){
    return randomOneToTen();
  }

  var mysteryRandom = function(){
    return randomElevenToTwenty();
  }

}

function randomGenerator(){

  var mysteryRandom = undefined;
  var mysteryRandom = undefined;

  return mysteryRandom();

  mysteryRandom = function(){
    return randomOneToTen();
  }

  var mysteryRandom = function(){
    return randomElevenToTwenty();
  }

}

// Let example

let mysteryRandom = function(){
  return randomOneToTen();
}

if (true) {
  let mysteryRandom = function(){
    return randomElevenToTwenty();
  }
}

mysteryRandom();

// const example

const i = 42;
i = -42;

const array = [1,2,3]
console.log(array);
// (3) [1, 2, 3]
array[0] = 42
console.log(array);
// (3) [42, 2, 3]


// Default params

function join(list,sep){
  list.join(sep);
}
join();


function join(list=[],sep){
  list.join(sep);
}
join();

// Rest params example

function add() {
  var result = 0;
  for(var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

add(); // 0
add(1); // 1
add(1, 2, 3); // 6


function add() {
  return arguments.reduce((sum, next) => sum + next);
}

add(1, 2, 3); // TypeError: arguments.reduce is not a function


function add(...list) {
  return list.reduce((sum, next) => sum + next);
}

add(1, 2, 3); // 6

function add(a, ...list, b) {}
// Uncaught SyntaxError: Rest parameter must be last formal parameter

// Spread example

// function call
var numbers = [1, 2, 3];
add(...numbers); // this is a Spread operator
// The above is functionally the same as:
add(1, 2, 3);

// var assignement
var ar1 = [1,2]
var ar2 = [1, ...ar1, 3]
// ar2 = [1,1,2,3]

// Destructuring
// Array destructuring

var ar1 = [1, 2, 3, 4, 5];
var [first, second, ...tail] = ar1;
// ar1    = [1, 2, 3, 4, 5] (stays unchanged)
// first  = 1 (number)
// second = 2 (number)
// tail   = [3, 4, 5] (array)

// Loop otimsation

for (var i = 0; i < array.length; i += 1 ) {
  // do something
}

for (var i = 0, l = array.length; i < l; i += 1 ) {
  // do something
}

for (var i = array.length -1; i >= 0 ; i -= 1 ) {
  // do something
}

for (var i = array.length -1; i >= 0 ; i -= 1 ) {
  var element = document.createElement("li");
}

var element = undefined;
for (var i = array.length -1; i >= 0 ; i -= 1 ) {
  element = document.createElement("li");
}

