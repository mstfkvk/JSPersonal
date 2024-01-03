
/* String --> to Numbers  */

// console.log(parseInt(123));
// console.log(parseInt("123"));

// console.log(parseInt("101",2)); // means that is binary
// console.log(parseInt("123",5));
// console.log(parseInt("123",8));
// console.log(parseInt("153",10));
// console.log(parseInt("123",'0x'));

// console.log(parseFloat('223,56'))
// console.log(parseFloat('223 + 56'))
// console.log(parseFloat('223_56'))
// console.log(parseFloat('223-56'))
// console.log(parseFloat('223 56'))
// console.log(parseFloat('223.56'))

/*  Literals --> fixed values, not variables --> 
                should be created with "const" but I used let mistakenly  */

// let books = ['test book', '', 'java book']
// console.log(books); // [ 'test book', '', 'java book' ]
// books = ['java book', , 'js book', ] // Only the last comma is ignored.
// console.log(books); // [ 'java book', <1 empty item>, 'js book' ] --> not UNDEFINED
// console.log(typeof books[1]); // but this returns 'undefined'
// console.log(books.length); // 3

// numeric(integer, float-point), boolean(true,false)

// Object literals

/*let car = {};
function carTypes(brand) { return `your car is ` + `${brand}` }
car = { myCar: 'saturn', getCar: carTypes('hoonda'), '': true, 'test':426 }
console.log(car)
console.log(car.myCar)
console.log(car.getCar)
console.log(car['']) // [] should use for "empty" or "special chars(!)"
console.log(car.test)  
// console.log(car.'test')  error
*/

/*
// Extra
const handler={mstf: 'kvk'}

const obj = {
  // __proto__
  __proto__: __proto__.mstf,
  // Shorthand for 'handler: handler'
  handler,
  // Methods
  toString() {
    // Super calls
    return "d " + super.toString();
  },
  // Computed (dynamic) property names
  ["prop_" + (() => 42)()]: 42,
};

console.log( obj.toString);
*/


const formatArg = (arg) => {
  if (Array.isArray(arg)) {
    // Print a bulleted list
    return arg.map((part) => `- ${part}`).join("\n");
  }
  if (arg.toString === Object.prototype.toString) {
    // This object will be serialized to "[object Object]".
    // Let's print something nicer.
    return JSON.stringify(arg);
  }
  return arg;
};

const print = (segments, ...args) => {
  // For any well-formed template literal, there will always be N args and
  // (N+1) string segments.
  let message = segments[0];
  segments.slice(1).forEach((segment, index) => {
    message += formatArg(args[index]) + segment;
  });
  console.log(message);
};

const todos = [
  "Learn JavaScript",
  "Learn Web APIs",
  "Set up my website",
  "Profit!",
];

const progress = { javascript: 20, html: 50, css: 10 };

print`I need to do:
${todos}
My current progress is: ${progress}
`;

// another way
print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress);

// I need to do:
// - Learn JavaScript
// - Learn Web APIs
// - Set up my website
// - Profit!
// My current progress is: {"javascript":20,"html":50,"css":10}
