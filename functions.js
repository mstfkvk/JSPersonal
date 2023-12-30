// assigning
/*
const a = 0;
let b = 0;
a.x = 3;
b.x = 5;
console.log(a+" "+b); // 0 0
console.log(a.x + " " + b.x); // undefined undefined
a = 8;
b = 9;
console.log(a+" "+b); // error Assignment to constant
*/

///// ---------------------------------------------

// Destructuring

/*
const foo = ["one", "two", "three"];

const one = foo[0];
const two = foo[1];
const three = foo[2];
*/

/*
const [one, two, three] = foo;
*/

/// ---------------------------------------------

// conditional ternary

let age = 20;
const st = age >= 18 ? "adult" : "minor";
// console.log(st);

//// -------------------------------------------

// delete -> deletes object's property(not for array--bad practice, use splice() method)
// --------> returns true, false or undefined

/*
delete object.property;
delete object[propertyKey];
delete objectName[index];
*/
/*
const text = { a: "1", b: "2", c: "3", d: "4" };
console.log(text); // { a: '1', b: '2', c: '3', d: '4' }
delete text.d;
console.log(text); // { a: '1', b: '2', c: '3' }
delete text['c'];
console.log(text); // { a: '1', b: '2' }
console.log(delete text); // false
console.log(delete text.b); // true

// NOTE: Math.PI --> non-configurable, so when you try to delete this, return false


const arr = [1, 3, 5, 7, 9];
console.log(delete arr[2]); // true
console.log( arr); // [ 1, 3, <1 empty item>, 7, 9 ]
*/
////-----------------------------------

// in
// returns true/false
/*
// Arrays
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
3 in trees; // returns true
6 in trees; // returns false

// built-in objects
"PI" in Math; // returns true
const myString = new String("coral");
"length" in myString; // returns true

// Custom objects
const mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // returns true
*/
// ----------------------------------

// instanceOf --> also return true/false

// objectName instanceof objectType
/*
const theDay = new Date(1995, 12, 17); // indexes start from "0"
if (theDay instanceof Date) {
  console.log(theDay); // 1996-01-16T22:00:00.000Z  
}
*/

///// ------------------------------------------- 0 ----------------------------------------------- //////

/*FUNCTIONS*/
/*
// 1- function declaration
function exponential(a, b) {
  return a ** b;
}
console.log(exponential(3, 1));
// 2- function expression
const fact = function (num) {
  return num < 2 ? 1 : num * fact(num - 1);
};
console.log(fact(5));
*/

// 3- eval()
/* eval() is a function property of the global object.
The argument of the eval() function is a string.
In strict mode, declaring a variable named eval or re-assigning eval is a SyntaxError.

"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode

----
eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2"); // returns 4
*/

/*
// 4- Calling functions / Function hoisting
//console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};

// BUT

console.log(square2(5)); // 25 NO ERROR

function square2(n) {
  return n * n;
}
// Function hoisting only works with function declarations — not with function expressions.
*/

/*
// 5- Arguments (use if you dont the number of arguments)
// The arguments of a function are maintained in an array-like object.
function sum() {
  let result = 0;
  for (let index = 0; index < arguments.length; index++) {
    result += arguments[index];
  }
  return console.log(result);
}

sum(3, 5, 8);
*/

/*
// 6- Parameters
// function f(a,b) --> a and b are undefined
// function f(a,b=1) --> b=1 (default parameter, so if user doesnt pass any value for b, it will be equal to 1)
function f(a, b = 1) {
  return a * b;
}
console.log(f(5)); // 5
console.log(f(5, 3)); // 15

// rest parameters --> refers to an array which include indefinite number of arguments / so returns an array
function multiply(multiplier, ...args) {
        return args.map((a)=>{multiplier*a})
}
consolo.log(2,1,2,3); // [2,4,6]
*/

// 7- Arrow func - also called as 'Fat Arrow'
// does not have its own 'this, arguments, super, or new.target'.
// Arrow functions are always anonymous.
/*
function Person() {
  // Some choose `that` instead of `self`.
  // Choose one and be consistent.
  const self = this;
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}

function Person2() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` properly refers to the person object
  }, 1000);
}

const p = new Person2();

*/
